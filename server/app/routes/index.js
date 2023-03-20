const panelistsController = require("../controllers").panelists;
const rolesController = require("../controllers").roles;

module.exports = (app) => {
  app.get("/panelists/:id", panelistsController.show);
  app.get("/roles/:id", rolesController.show);
};
