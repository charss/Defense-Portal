const panelistsController = require('../controllers').panelists;

module.exports = app => {
  app.get( "/panelists/:id", panelistsController.show);
}