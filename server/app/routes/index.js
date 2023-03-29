module.exports = (app) => {
  require("../routes/authRoutes")( app );
  require("../routes/studentsRoutes")( app );
  require("../routes/panelistsRoutes")( app );
  require("../routes/rolesRoutes")( app );
  require("../routes/groupsRoutes")( app );
  require("../routes/schedulesRoutes")( app );
  require("../routes/rubricsRoutes")( app );
  require("../routes/templatesRoutes")( app );
};
