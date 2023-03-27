"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("group_scores", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      rubric_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "rubrics",
          key: "id",
          as: "rubrics",
        },
      },
      scoresheet_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "scoresheets",
          key: "id",
          as: "scoresheets",
        },
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable("group_scores");
  },
};
