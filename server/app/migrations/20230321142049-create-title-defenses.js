"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("title_defenses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title1: {
        type: Sequelize.STRING,
      },
      docu_link1: {
        type: Sequelize.STRING,
      },
      title2: {
        type: Sequelize.STRING,
      },
      docu_link2: {
        type: Sequelize.STRING,
      },
      title3: {
        type: Sequelize.STRING,
      },
      docu_link3: {
        type: Sequelize.STRING,
      },
      title1_remark: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      title2_remark: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      title3_remark: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
    await queryInterface.dropTable("title_defenses");
  },
};
