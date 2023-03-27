"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class s_school_year_term extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      s_school_year_term.belongsTo(models.lu_school_terms, {
        foreignKey: "term",
      });

      s_school_year_term.belongsTo(models.lu_school_years, {
        foreignKey: "school_year",
      });
    }
  }
  s_school_year_term.init(
    {
      term: DataTypes.INTEGER,
      school_year: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "s_school_year_term",
    }
  );
  return s_school_year_term;
};
