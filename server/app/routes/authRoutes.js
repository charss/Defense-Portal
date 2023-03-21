const { verifySignUp } = require("../middleware");
const authController = require("../controllers").auth;

module.exports = (app) => {
  // Headers //
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Routes //
  app.post(
    "/signup",
    [verifySignUp.checkForDuplicateUsername],
    authController.signUp
  );

  app.post("/signin", authController.signIn);
};
