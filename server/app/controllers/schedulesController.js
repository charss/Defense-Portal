const schedules = require("../models").schedules;
const thesis_defenses = require("../models").thesis_defenses;
const title_defenses = require("../models").title_defenses;

exports.index = (req, res) => {
  // Get all schedules
  return schedules
    .findAll({ include: [thesis_defenses, title_defenses] })
    .then((data) => {
      if (!data) {
        res.status(404).send({ error: "Schedule not found" });
      } else {
        res.status(200).send(data);
      }
    });
};

exports.show = async (req, res) => {
  // Get schedule by ID
  return schedules
    .findByPk(req.params.id, { include: [thesis_defenses, title_defenses] })
    .then((schedule) => {
      if (!schedule) {
        res.status(404).send({ error: "Schedule not found" });
      } else {
        res.status(200).send(schedule);
      }
    });
};
