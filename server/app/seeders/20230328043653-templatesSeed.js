"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("templates", [
      {
        grading_type: "Individual",
        pbl_level: "PBL1",
        sheet_title: "Sample Template 1",
        is_cs: false,
      },
      {
        grading_type: "Group",
        pbl_level: "PBL1",
        sheet_title: "Sample Template 2",
        is_cs: false,
      },
      {
        grading_type: "Individual",
        pbl_level: "PBL2",
        sheet_title: "Sample Template 3",
        is_cs: false,
      },
      {
        grading_type: "Individual",
        pbl_level: "PBL3",
        sheet_title: "Sample Template 4",
        is_cs: false,
      },
      {
        grading_type: "Group",
        pbl_level: "PBL1",
        sheet_title: "Sample Template 5",
        is_cs: true,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("templates", null, {});
  },
};
