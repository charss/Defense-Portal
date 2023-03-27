const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

require("./app/routes")(app);

app.get("/", (req, res) => {
  res.json("TEST SERVER");
});

module.exports = app;
