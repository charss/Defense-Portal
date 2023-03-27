"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class indiv_scores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      indiv_scores.belongsTo(models.rubrics, {
        foreignKey: "rubric_id",
      });

      indiv_scores.belongsTo(models.students, {
        foreignKey: "student_id",
      });

      indiv_scores.belongsTo(models.scoresheets, {
        foreignKey: "scoresheet_id",
      });
    }
  }
  indiv_scores.init(
    {
      rubric_id: DataTypes.INTEGER,
      student_id: DataTypes.INTEGER,
      scoresheet_id: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "indiv_scores",
    }
  );
  return indiv_scores;
};
