const Rubrics = require("../models").rubrics;

exports.getAll = (req, res) => {
  // Get all rubrics
  return Rubrics.findAll({ where: req.query }).then((rubrics) =>
    res.status(200).send(rubrics)
  );
};

exports.getById = (req, res) => {
  // Get rubric by ID
  return Rubrics.findByPk(req.params.id).then((rubric) => {
    if (!rubric) {
      res.status(404).send({ error: "Rubric not found" });
    } else {
      res.status(200).send(rubric);
    }
  });
};

exports.create = (req, res) => {
  // Create new rubric
  return Rubrics.create({
    description: req.body.description,
    rate1: req.body.rate1,
    rate2: req.body.rate2,
    rate3: req.body.rate3,
    rate4: req.body.rate4,
    rate5: req.body.rate5,
    weight: req.body.weight,
    rubric_type: req.body.rubric_type,
    pbl_level: req.body.pbl_level,
    category: req.body.category,
  })
    .then((newRubric) => res.status(201).send(newRubric))
    .catch((error) => res.status(500).send(error));
};

exports.update = async (req, res) => {
  // Update rubric
  const rubric = await Rubrics.findByPk(req.params.id);
  if (!rubric) {
    return res.status(404).send({ error: "Rubric does not exist" });
  }

  return rubric
    .update({
      description: req.body.description,
      rate1: req.body.rate1,
      rate2: req.body.rate2,
      rate3: req.body.rate3,
      rate4: req.body.rate4,
      rate5: req.body.rate5,
      weight: req.body.weight,
      rubric_type: req.body.rubric_type,
      pbl_level: req.body.pbl_level,
      category: req.body.category,
    })
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send(error));
};
