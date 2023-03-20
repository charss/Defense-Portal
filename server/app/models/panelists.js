"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Panelists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Panelists.belongsTo(models.Roles, {
        foreignKey: "role_id",
      });
    }
  }
  Panelists.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      last_name: DataTypes.STRING,
      first_name: DataTypes.STRING,
      middle_name: DataTypes.STRING,
      school: DataTypes.STRING,
      role_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Panelists",
    }
  );
  return Panelists;
};
