"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class templates extends Model {
    static associate(models) {
      templates.belongsToMany(models.schedules, {
        through: "defense_templates",
        as: "schedules",
        foreignKey: "schedule_id",
      });
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
