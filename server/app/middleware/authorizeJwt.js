const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

function verifyToken(req, res, next) {
  let token = req.headers["x-access-token"];
  if (!token) return res.status(403).send({ error: "No token provided" });

  jwt.verify(token, config.secret, (error, decoded) => {
    if (error) return Response.status(401).send({ error: "Unauthorized" });

    request.userId = decoded.id;
    next();
  });
}

module.exports = {
  verifyToken: verifyToken,
};
