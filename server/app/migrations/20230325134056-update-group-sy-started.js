"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.changeColumn("groups", "sy_started", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "lu_school_years",
        key: "school_year",
        as: "sy_started",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.changeColumn("groups", "sy_)started");
  },
};
