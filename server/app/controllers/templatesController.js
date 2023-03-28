const Templates = require("../models").templates;
const Rubrics = require("../models").rubrics;

const templateOptions = {
  include: [
    {
      model: Rubrics,
      as: "rubrics",
    },
  ],
};

exports.getAll = (req, res) => {
  // Get all templates
  return Templates.findAll(templateOptions).then((templates) =>
    res.status(200).send(templates)
  );
};

exports.getById = (req, res) => {
  // Get template by ID
  return Templates.findByPk(req.params.id, templateOptions).then((template) => {
    if (!template) {
      res.status(404).send({ error: "Template not found" });
    } else {
      res.status(200).send(template);
    }
  });
};

exports.create = async (req, res) => {
  // Create new template
  return Templates.create({
    title: req.body.title,
    grading_type: req.body.grading_type,
    pbl_level: req.body.pbl_level,
    is_cs: req.body.is_cs,
  })
    .then((new_template) => res.status(201).send(new_template))
    .catch((error) => res.status(500).send(error));
};

exports.update = async (req, res) => {
  // Update template
  const template = await Templates.findByPk(req.params.id);
  if (!template) {
    return res.status(404).send({ error: "Template does not exist" });
  }

  return template
    .update({
      title: req.body.title,
      grading_type: req.body.grading_type,
      pbl_level: req.body.pbl_level,
      is_cs: req.body.is_cs,
    })
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(400).send(error));
};

exports.assignRubrics = async (req, res) => {
  // Assign rubrics to template
  const template = await Templates.findByPk(req.params.id);
  const new_rubric_ids = req.body.rubrics.map((id) => parseInt(id));
  const current_rubric_ids = await template.getRubrics().then((rubrics) => {
    return rubrics.map((rubric) => rubric.id);
  });

  // Compares current rubrics to new rubrics
  // Will add rubric id to to_remove_ids if id is present in current but not in new
  // Will remove rubric id from new_current_ids if present in both current and new to remove lessen execution time
  const to_remove_ids = [];
  for (const rubric_id of current_rubric_ids) {
    if (new_rubric_ids.includes(rubric_id)) {
      let index = new_rubric_ids.indexOf(rubric_id);
      new_rubric_ids.splice(index, 1);
    } else {
      to_remove_ids.push(rubric_id);
    }
  }

  // Gets rubric object and store in rubrics_query
  // Will end request if a rubric does not exist
  const rubrics_query = [];
  for (const rubric_id of new_rubric_ids) {
    const rubric = await Rubrics.findByPk(rubric_id);
    if (!rubric) {
      res.status(400).send({ error: `Rubric ${rubric_id} does not exist` });
      return;
    }

    rubrics_query.push(rubric);
  }

  // Remove removed rubrics and add new rubrics to template
  await template.removeRubrics(to_remove_ids);
  await template.addRubrics(rubrics_query);

  return Templates.findByPk(req.params.id, templateOptions).then((template) =>
    res.status(200).send(template)
  );
};
