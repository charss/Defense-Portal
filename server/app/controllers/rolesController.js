const Role = require("../models").Roles;
const Panelists = require("../models").Panelists;

const roleOptions = {
  include: [
    {
      model: Panelists,
      as: "panelists",
    },
  ],
};

exports.show = (req, res) => {
  return Role.findByPk(req.params.id, roleOptions).then((role) => {
    if (!role) {
      res.status(404).send({ error: "Role not found" });
    } else {
      res.status(200).send(role);
    }
  });
};
