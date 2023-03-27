const schedulesController = require("../controllers").schedules;

module.exports = (app) => {
  app.get("/schedules/", schedulesController.getAll);
  app.get("/schedules/:id", schedulesController.getById);
};
