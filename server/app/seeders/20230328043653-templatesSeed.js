"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("templates", [
      {
        title: "Sample Template 1",
        grading_type: "Individual",
        pbl_level: "PBL1",
        is_cs: false,
      },
      {
        title: "Sample Template 2",
        grading_type: "Group",
        pbl_level: "PBL1",
        is_cs: false,
      },
      {
        title: "Sample Template 3",
        grading_type: "Individual",
        pbl_level: "PBL2",
        is_cs: false,
      },
      {
        title: "Sample Template 4",
        grading_type: "Individual",
        pbl_level: "PBL3",
        is_cs: false,
      },
      {
        title: "Sample Template 5",
        grading_type: "Group",
        pbl_level: "PBL1",
        is_cs: true,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("templates", null, {});
  },
};
