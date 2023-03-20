'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Panelists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      middle_name: {
        type: Sequelize.STRING
      },
      school: {
        allowNull: false,
        type: Sequelize.STRING
      },
      role_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 2,
        references: {
          model: "Roles",
          key: "id",
          as: "role_id",
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Panelists');
  }
};