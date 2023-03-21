"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("groups", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      project_title: {
        type: Sequelize.STRING(1000),
      },
      program: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      term_started: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sy_started: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      mentor_id: {
        type: Sequelize.INTEGER,
        onDelete: "SET NULL",
        references: {
          model: "panelists",
          key: "id",
          as: "mentor_id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("groups");
  },
};
