const auth = require("./authController.js");
const panelists = require("./panelistsController.js");
const roles = require("./rolesController.js");
const students = require("./studentsController.js");
const groups = require("./groupsController.js");
const schedules = require("./schedulesController.js");
const rubrics = require("./rubricsController.js");

module.exports = {
  auth,
  panelists,
  roles,
  students,
  groups,
  schedules,
  rubrics,
};
