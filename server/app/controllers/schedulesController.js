const Schedules = require("../models").schedules;
const ThesisDefenses = require("../models").thesis_defenses;
const TitleDefenses = require("../models").title_defenses;

exports.getAll = (req, res) => {
  // Get all schedules
  return Schedules.findAll({ include: [ThesisDefenses, TitleDefenses] }).then(
    (data) => {
      if (!data) {
        res.status(404).send({ error: "No schedule found" });
      } else {
        res.status(200).send(data);
      }
    }
  );
};

exports.getById = async (req, res) => {
  // Get schedule by ID
  return Schedules.findByPk(req.params.id, {
    include: [ThesisDefenses, TitleDefenses],
  }).then((schedule) => {
    if (!schedule) {
      res.status(404).send({ error: "Schedule not found" });
    } else {
      res.status(200).send(schedule);
    }
  });
};
