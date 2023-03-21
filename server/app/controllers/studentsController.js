const students = require("../models").students;

exports.show = (req, res) => {
  return students.findByPk(req.params.id).then((student) => {
    if (!student) {
      res.status(404).send({ error: "Student not found" });
    } else {
      res.status(200).send(student);
    }
  });
};
