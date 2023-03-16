const express = require("express");

const app = express();
const path = require("path");

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => {
  console.log(process.env.NODE_ENV);
  console.log(process.env.TRY);
  console.log(path.join(__dirname, `./.env.${process.env.NODE_ENV}`));
  res.json("TEST SERVER");
});

module.exports = app;
