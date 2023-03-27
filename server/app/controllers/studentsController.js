const Students = require("../models").students;
const Groups = require("../models").groups;

exports.getAll = (req, res) => {
  // Get all students
  return Students.findAll().then((data) => {
    if (!data) {
      res.status(404).send({ error: "Students not found" });
    } else {
      res.status(200).send(data);
    }
  });
};

exports.getById = (req, res) => {
  // Get student by ID
  return Students.findByPk(req.params.id).then((student) => {
    if (!student) {
      res.status(404).send({ error: "Student not found" });
    } else {
      res.status(200).send(student);
    }
  });
};

exports.create = async (req, res) => {
  // Create new student
  const group = await Groups.findByPk(req.body.group_id);
  if (!group) {
    return res.status(404).send({ error: "Group does not exist" });
  }

  return Students.create({
    last_name: req.body.last_name,
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    group_id: req.body.group_id,
  })
    .then((newStudent) => res.status(201).send(newStudent))
    .catch((error) => res.status(500).send(error));
};

exports.update = async (req, res) => {
  // Update student
  const student = await Students.findByPk(req.params.id);
  if (!student) {
    return res.status(404).send({ error: "Student does not exist" });
  }

  return student
    .update({
      last_name: req.body.last_name,
      first_name: req.body.first_name,
      middle_name: req.body.middle_name,
      group_id: req.body.group_id,
    })
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(400).send(error));
};
