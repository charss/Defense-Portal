"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class templates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  templates.init(
    {
      grading_type: DataTypes.STRING,
      pbl_level: DataTypes.INTEGER,
      sheet_title: DataTypes.STRING,
      is_cs: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "templates",
    }
  );
  return templates;
};
