const rolesController = require('../controllers').roles;

module.exports = app => {
  app.get( "/roles/:id", rolesController.show);
}