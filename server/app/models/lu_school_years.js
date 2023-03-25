"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class lu_school_years extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      lu_school_years.hasMany(models.groups, {
        foreignKey: "sy_started",
        as: "sy_started",
      });
    }
  }
  lu_school_years.init(
    {
      school_year: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "lu_school_years",
    }
  );
  return lu_school_years;
};
