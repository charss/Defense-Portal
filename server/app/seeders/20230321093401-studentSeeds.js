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
    return await queryInterface.bulkInsert("students", [
      {
        last_name: "Schwinghammer",
        first_name: "Matthew",
        middle_name: "Lievin",
        group_id: 1,
      },
      {
        last_name: "Marquez",
        first_name: "Adekunle",
        middle_name: "Melvyn",
        group_id: 2,
      },
      {
        last_name: "Lynton",
        first_name: "Narin",
        middle_name: "Alexandra",
        group_id: 1,
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
    return await queryInterface.bulkDelete("students", null, {});
  },
};
