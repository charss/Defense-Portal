const schedulesController = require("../controllers").schedules;

module.exports = (app) => {
  app.get("/schedules/", schedulesController.index);
  app.get("/schedules/:id", schedulesController.show);
};
