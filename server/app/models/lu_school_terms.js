"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class lu_school_terms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      lu_school_terms.hasMany(models.groups, {
        foreignKey: "term_started",
        as: "term_started",
      });

      lu_school_terms.hasOne(models.s_school_year_term, {
        foreignKey: "term",
      });
    }
  }
  lu_school_terms.init(
    {
      term: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "lu_school_terms",
    }
  );
  return lu_school_terms;
};
