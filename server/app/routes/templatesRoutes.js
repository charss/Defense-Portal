const templatesController = require('../controllers').templates;

module.exports = app => {
  app.get( "/templates", templatesController.getAll);
  app.get( "/templates/:id", templatesController.getById);
  app.post( "/templates", templatesController.create);
  app.put( "/templates/:id", templatesController.update);

  app.post( "/templates/:id/assign-rubrics", templatesController.assignRubrics);
}