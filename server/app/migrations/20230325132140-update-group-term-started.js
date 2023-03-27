"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.changeColumn("groups", "term_started", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "lu_school_terms",
        key: "term",
        as: "term_started",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.changeColumn("groups", "term_started");
  },
};
