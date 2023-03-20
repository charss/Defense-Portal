"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return await queryInterface.bulkInsert("Panelists", [
      {
        username: "test_user1",
        password: "test",
        last_name: "TestL",
        first_name: "TestF",
        middle_name: "TestM",
        school: "Test School",
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "test_user2",
        password: "test",
        last_name: "TestL",
        first_name: "TestF",
        middle_name: "TestM",
        school: "Test School",
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Panelists", null, {});
  },
};
