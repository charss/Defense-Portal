const panelists = require("../models").panelists;

const checkForDuplicateUsername = (req, res, next) => {
  panelists.findOne({ where: { username: req.body.username } }).then((user) => {
    if (user) {
      res.status(400).send({ error: "Username already taken" });
      return
    }
    next();
  });
};

module.exports = { checkForDuplicateUsername };
