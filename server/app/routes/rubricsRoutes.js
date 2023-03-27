const rubricsController = require("../controllers").rubrics;

module.exports = (app) => {
  app.get("/rubrics/", rubricsController.getAll);
  app.get("/rubrics/:id", rubricsController.getById);
  app.post("/rubrics/", rubricsController.create);
  app.put("/rubrics/:id", rubricsController.update);
};
