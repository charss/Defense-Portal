"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rubrics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      rubrics.belongsToMany(models.template_rubric, {
        through: "template_rubrics",
        as: "rubric",
        foreignKey: "rubric_id",
      });
    }
  }
  rubrics.init(
    {
      description: DataTypes.STRING,
      rate1: DataTypes.STRING,
      rate2: DataTypes.STRING,
      rate3: DataTypes.STRING,
      rate4: DataTypes.STRING,
      rate5: DataTypes.STRING,
      weight: DataTypes.DOUBLE,
      rubric_type: DataTypes.STRING,
      pbl_level: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "rubrics",
    }
  );
  return rubrics;
};
