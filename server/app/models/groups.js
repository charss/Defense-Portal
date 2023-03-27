"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      groups.hasMany(models.students, {
        foreignKey: "group_id",
        as: "members",
      });

      groups.belongsTo(models.panelists, {
        foreignKey: "mentor_id",
      });

      groups.belongsTo(models.lu_school_terms, {
        foreignKey: "term_started",
      });

      groups.belongsTo(models.lu_school_years, {
        foreignKey: "sy_started",
      });
    }
  }
  groups.init(
    {
      name: DataTypes.STRING,
      project_title: DataTypes.STRING,
      program: DataTypes.STRING,
      term_started: DataTypes.INTEGER,
      sy_started: DataTypes.INTEGER,
      is_active: DataTypes.BOOLEAN,
      mentor_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "groups",
    }
  );
  return groups;
};
