const groupsController = require("../controllers").groups;

module.exports = (app) => {
  app.get("/groups/", groupsController.getAll);
  app.get("/groups/:id", groupsController.getById);
  app.post("/groups/", groupsController.create);
  app.put("/groups/:id", groupsController.update);
};
