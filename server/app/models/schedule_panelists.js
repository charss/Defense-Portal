"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class schedule_panelists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  schedule_panelists.init(
    {
      is_head: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "schedule_panelists",
    }
  );
  return schedule_panelists;
};
