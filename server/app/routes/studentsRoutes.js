const studentsController = require('../controllers').students;

module.exports = app => {
  app.get( "/students/:id", studentsController.show);
}