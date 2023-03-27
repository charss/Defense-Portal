"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class defense_templates extends Model {
    static associate(models) {
      // define association here
    }
  }
  defense_templates.init(
    {},
    {
      sequelize,
      modelName: "defense_templates",
    }
  );
  return defense_templates;
};
