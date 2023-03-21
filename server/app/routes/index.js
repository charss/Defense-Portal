module.exports = (app) => {
  require("../routes/authRoutes")( app );
  require("../routes/studentsRoutes")( app );
  require("../routes/panelistsRoutes")( app );
  require("../routes/rolesRoutes")( app );
};
