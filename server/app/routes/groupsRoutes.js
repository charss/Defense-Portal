const groupsController = require('../controllers').groups;

module.exports = app => {
  app.get( "/groups/:id", groupsController.show);
}