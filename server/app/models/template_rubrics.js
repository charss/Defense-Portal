"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class template_rubrics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  template_rubrics.init(
    {
      template_id: DataTypes.INTEGER,
      rubric_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "template_rubrics",
    }
  );
  return template_rubrics;
};
