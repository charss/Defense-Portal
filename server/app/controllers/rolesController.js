const roles = require("../models").roles;
const panelists = require("../models").panelists;

const roleOptions = {
  include: [
    {
      model: panelists,
      as: "panelists",
    },
  ],
};

exports.show = (req, res) => {
  return roles.findByPk(req.params.id, roleOptions).then((role) => {
    if (!role) {
      res.status(404).send({ error: "Role not found" });
    } else {
      res.status(200).send(role);
    }
  });
};
