"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class thesis_defenses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      thesis_defenses.hasOne(models.schedules, {
        foreignKey: "more_info",
        constraints: false,
        scope: {
          scheduleType: "thesis",
        },
      });
    }
  }
  thesis_defenses.init(
    {
      docu_link: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "thesis_defenses",
    }
  );
  return thesis_defenses;
};
