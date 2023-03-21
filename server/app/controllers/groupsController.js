const groups = require("../models").groups;
const students = require("../models").students;

const groupOptions = {
  include: [
    {
      model: students,
      as: "members",
    },
  ],
};

exports.show = (req, res) => {
  return groups.findByPk(req.params.id, groupOptions).then((group) => {
    if (!group) {
      res.status(404).send({ error: "Group not found" });
    } else {
      res.status(200).send(group);
    }
  });
};
