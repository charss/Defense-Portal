const panelistsController = require("../controllers").panelists;

module.exports = (app) => {
  app.get("/panelists", panelistsController.getAll);
  app.get("/panelists/test", panelistsController.test);
  app.get("/panelists/:id", panelistsController.getById);
  app.put("/panelists/:id", panelistsController.update);
};
