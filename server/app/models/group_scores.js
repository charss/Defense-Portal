"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class group_scores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      group_scores.belongsTo(models.rubrics, {
        foreignKey: "rubric_id",
      });

      group_scores.belongsTo(models.scoresheets, {
        foreignKey: "scoresheet_id",
      });
    }
  }
  group_scores.init(
    {
      rubric_id: DataTypes.INTEGER,
      scoresheet_id: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "group_scores",
    }
  );
  return group_scores;
};
