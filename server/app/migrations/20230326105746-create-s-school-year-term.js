"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("s_school_year_terms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      term: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "lu_school_terms",
          key: "term",
          as: "term",
        },
      },
      school_year: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "lu_school_years",
          key: "school_year",
          as: "school_year",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("s_school_year_terms");
  },
};
