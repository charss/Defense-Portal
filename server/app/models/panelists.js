"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class panelists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      panelists.belongsTo(models.roles, {
        foreignKey: "role_id",
      });

      panelists.hasMany(models.groups, {
        foreignKey: "mentor_id",
        as: "mentee",
        onDelete: "SET NULL",
      });

      panelists.belongsToMany(models.schedules, {
        through: "schedule_panelists",
        as: "schedules",
        foreignKey: "panelist_id",
      });
    }
  }
  panelists.init(
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
      modelName: "panelists",
    }
  );
  return panelists;
};
