const rolesController = require("../controllers").roles;

module.exports = (app) => {
  app.get("/roles/", rolesController.getAll);
  app.get("/roles/:id", rolesController.getById);
};
