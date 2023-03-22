"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class title_defenses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      title_defenses.hasOne(models.schedules, {
        foreignKey: "more_info",
        constraints: false,
        scope: {
          scheduleType: "title",
        },
      });
    }
  }
  title_defenses.init(
    {
      title1: DataTypes.STRING,
      docu_link1: DataTypes.STRING,
      title2: DataTypes.STRING,
      docu_link2: DataTypes.STRING,
      title3: DataTypes.STRING,
      docu_link3: DataTypes.STRING,
      title1_remark: DataTypes.BOOLEAN,
      title2_remark: DataTypes.BOOLEAN,
      title3_remark: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "title_defenses",
    }
  );
  return title_defenses;
};
