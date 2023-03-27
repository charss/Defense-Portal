const Groups = require("../models").groups;
const Students = require("../models").students;
const Setting = require("../models").s_school_year_term;

const groupOptions = {
  include: [
    {
      model: Students,
      as: "members",
    },
  ],
};

exports.getAll = (req, res) => {
  // Get all groups
  return Groups.findAll(groupOptions).then((groups) => {
    if (!groups) {
      res.status(404).send({ error: "No groups found" });
    } else {
      res.status(200).send(groups);
    }
  });
};

exports.getById = (req, res) => {
  // Get group by ID
  return Groups.findByPk(req.params.id, groupOptions).then((group) => {
    if (!group) {
      res.status(404).send({ error: "Group not found" });
    } else {
      res.status(200).send(group);
    }
  });
};

exports.create = async (req, res) => {
  // Create new group
  const current_term = await Setting.findByPk(1);

  if (!current_term) {
    return res.status(404).send({ error: "Setting not found" });
  }

  return Groups.create({
    name: req.body.name,
    project_title: req.body.project_title,
    program: req.body.program,
    term_started: current_term["term"],
    sy_started: current_term["school_year"],
  })
    .then((new_group) => res.status(201).send(new_group))
    .catch((error) => res.status(500).send(error));
};

exports.update = async (req, res) => {
  // Update group
  const group = await Groups.findByPk(req.params.id);
  if (!group) {
    return res.status(404).send({ error: "Group does not exist" });
  }

  return group
    .update({
      name: req.body.name,
      project_title: req.body.project_title,
      program: req.body.program,
      term: req.body.term,
      sy_started: req.body.sy_started,
      is_active: req.body.is_active,
      mentor_id: req.body.mentor_id,
    })
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(400).send(error));
};
