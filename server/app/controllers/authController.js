const database = require("../models");
const config = require("../config/auth.config.js");
const Panelist = database.panelists;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signUp = (req, res) => {
  const SALT_LENGTH = 8;
  return Panelist.create({
    username: req.body.username,
    last_name: req.body.last_name,
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    school: req.body.school,
    password: bcrypt.hashSync(req.body.password, SALT_LENGTH),
  })
    .then((newUser) => res.status(201).send(newUser))
    .catch((error) => res.status(500).send(error));
};

exports.signIn = (req, res) => {
  const signInError = {
    accessToken: null,
    error: "Invalid username or password",
  };

  return Panelist.findOne({ where: { username: req.body.username } })
    .then((user) => {
      if (!user) return res.status(401).send(signInError);

      const validPassword = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!validPassword) return res.status(401).send(signInError);

      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400,
      });
      res
        .status(200)
        .send({ id: user.id, username: user.username, accessToken: token });
    })
    .catch((error) => res.status(500).send(error));
};
