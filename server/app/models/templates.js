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

      templates.belongsToMany(models.rubrics, {
        through: "template_rubrics",
        as: "rubrics",
        foreignKey: "template_id",
      });
    }
  }
  templates.init(
    {
      title: DataTypes.STRING,
      grading_type: DataTypes.STRING,
      pbl_level: DataTypes.STRING,
      is_cs: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "templates",
    }
  );
  return templates;
};
