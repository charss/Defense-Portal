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
    return await queryInterface.bulkInsert("schedules", [
      {
        group_id: 1,
        more_info: 1,
        schedule_type_id: 1,
      },
      {
        group_id: 1,
        more_info: 2,
        schedule_type_id: 1,
      },
      {
        group_id: 2,
        more_info: 1,
        schedule_type_id: 2,
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
    return await queryInterface.bulkDelete("schedules", null, {});
  },
};
