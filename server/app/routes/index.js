const panelistsController = require("../controllers").panelists;
const rolesController = require("../controllers").roles;
const studentsController = require("../controllers").students

module.exports = (app) => {
  app.get("/panelists/:id", panelistsController.show);
  app.get("/roles/:id", rolesController.show);
  app.get("/students/:id", studentsController.show);
};
