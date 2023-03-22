"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const uppercaseFirst = (str) => `${str[0].toUpperCase()}${str.substr(1)}`;
  class schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      schedules.belongsTo(models.schedule_types, {
        foreignKey: "schedule_type_id",
      });

      schedules.belongsTo(models.groups, {
        foreignKey: "group_id",
      });

      schedules.belongsTo(models.title_defenses, {
        foreignKey: "more_info",
        constraints: false,
      });

      schedules.belongsTo(models.thesis_defenses, {
        foreignKey: "more_info",
        constraints: false,
      });
    }
    getSchedules(options) {
      if (!this.scheduleType) return Promise.resolve(null);

      const mixinMethodName = `get${this.scheduleType}`;
      return this[mixinMethodName](options);
    }
  }

  schedules.init(
    {
      group_id: DataTypes.INTEGER,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      zoom_link: DataTypes.STRING,
      is_active: DataTypes.BOOLEAN,
      more_info: DataTypes.INTEGER,
      schedule_type_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "schedules",
    }
  );

  schedules.addHook("afterFind", (findResult) => {
    if (findResult === null) return; // if schedule is not found
    if (!Array.isArray(findResult)) findResult = [findResult];

    for (const instance of findResult) {
      if (
        instance.schedule_type_id === 1 &&
        instance.title_defense !== undefined
      ) {
        instance.more_info = instance.title_defense;
      } else if (
        instance.schedule_type_id === 2 &&
        instance.thesis_defense !== undefined
      ) {
        instance.more_info = instance.thesis_defense;
      }

      delete instance.title_defense;
      delete instance.dataValues.title_defense;
      delete instance.thesis_defense;
      delete instance.dataValues.thesis_defense;
    }
  });

  return schedules;
};
