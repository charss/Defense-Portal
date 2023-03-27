"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class scoresheets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      scoresheets.belongsTo(models.schedule_panelists, {
        foreignKey: "schedule_panelists_id",
      });

      scoresheets.hasMany(models.group_scores, {
        foreignKey: "scoresheet_id",
        as: "scoresheets",
      });

      scoresheets.hasMany(models.indiv_scores, {
        foreignKey: "scoresheet_id",
        as: "scoresheet",
      });
    }
  }
  scoresheets.init(
    {
      comment: DataTypes.STRING,
      schedule_panelists_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "scoresheets",
    }
  );
  return scoresheets;
};
