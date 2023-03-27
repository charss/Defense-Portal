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
    return await queryInterface.bulkInsert("rubrics", [
      {
        description: "Sample Individual Rubric",
        rate1: "Sample individual rate 1",
        rate2: "Sample individual rate 2",
        rate3: "Sample individual rate 3",
        rate4: "Sample individual rate 4",
        rate5: "Sample individual rate 5",
        weight: 6,
        rubric_type: "Individual",
        pbl_level: "PBL1",
        category: "Sample Category",
      },
      {
        description: "Sample Individual Rubric 2",
        rate1: "Sample individual rate 1",
        rate2: "Sample individual rate 2",
        rate3: "Sample individual rate 3",
        rate4: "Sample individual rate 4",
        rate5: "Sample individual rate 5",
        weight: 4,
        rubric_type: "Individual",
        pbl_level: "PBL2",
        category: "Sample Category",
      },
      {
        description: "Sample Group Rubric",
        rate1: "Sample group rate 1",
        rate2: "Sample group rate 2",
        rate3: "Sample group rate 3",
        rate4: "Sample group rate 4",
        rate5: "Sample group rate 5",
        weight: 2,
        rubric_type: "Group",
        pbl_level: "PBL1",
        category: "Sample Category",
      },
      {
        description: "Sample Group Rubric 2",
        rate1: "Sample group rate 1",
        rate2: "Sample group rate 2",
        rate3: "Sample group rate 3",
        rate4: "Sample group rate 4",
        rate5: "Sample group rate 5",
        weight: 3,
        rubric_type: "Group",
        pbl_level: "PBL2",
        category: "Sample Category",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("rubrics", null, {});
  },
};
