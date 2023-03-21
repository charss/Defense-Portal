const express = require("express");

const app = express();
const path = require("path");

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require("./app/routes")(app);

app.get("/", (req, res) => {
  res.json("TEST SERVER");
});

module.exports = app;
