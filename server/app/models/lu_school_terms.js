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
      // define association here
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
