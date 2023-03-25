"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("rubric", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rate1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rate2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rate3: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rate4: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rate5: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      weight: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      rubric_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pbl_level: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable("rubric");
  },
};
