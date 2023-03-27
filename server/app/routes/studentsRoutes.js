const studentsController = require('../controllers').students;

module.exports = app => {
  app.get( "/students", studentsController.getAll);
  app.get( "/students/:id", studentsController.getById);
  app.post( "/students", studentsController.create);
  app.put( "/students/:id", studentsController.update);
}