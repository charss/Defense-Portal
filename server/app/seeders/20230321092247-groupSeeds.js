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
    return await queryInterface.bulkInsert("groups", [
      {
        name: "Group 1",
        program: "BSCS",
        term_started: 1,
        sy_started: 20222023,
        mentor_id: 1,
      },
      {
        name: "Group 2",
        program: "BSIT",
        term_started: 1,
        sy_started: 20222023,
        mentor_id: 1,
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
    return await queryInterface.bulkDelete("groups", null, {});
  },
};
