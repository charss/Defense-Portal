const Roles = require("../models").roles;
const Panelists = require("../models").panelists;

const roleOptions = {
  include: [
    {
      model: Panelists,
      as: "panelists",
    },
  ],
};

exports.getAll = (req, res) => {
  // Get all roles
  return Roles.findAll().then((roles) => {
    if (!roles) {
      res.status(404).send({ error: "Roles not found" });
    } else {
      res.status(200).send(roles);
    }
  });
};

exports.getById = (req, res) => {
  // Get roles by ID
  return Roles.findByPk(req.params.id).then((role) => {
    if (!role) {
      res.status(404).send({ error: "Role not found" });
    } else {
      res.status(200).send(role);
    }
  });
};
