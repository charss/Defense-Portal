const Panelists = require("../models").panelists;
const Schedules = require("../models").schedules;

exports.getAll = (req, res) => {
  return Panelists.findAll({
    include: { model: Schedules, as: "schedules" },
    where: req.query,
  }).then((data) => {
    if (!data) {
      res.status(404).send({ error: "Panelists not found" });
    } else {
      res.status(200).send(data);
    }
  });
};

exports.test = async (req, res) => {
  const amidala = await Panelists.create({
    username: "test",
    password: "test",
    last_name: "test",
    first_name: "test",
    middle_name: "test",
    school: "test",
    role_id: 1,
  });

  const sched = await Schedules.create({
    group_id: 1,
    more_info: 1,
    schedule_type_id: 1,
  });
  await amidala.addSchedule(sched, { through: { is_head: false } });
  const result = await Panelists.findOne({
    where: {
      username: "test",
    },
    include: { model: Schedules, as: "schedules" },
  });
  res.status(200).send(result);
};

exports.getById = (req, res) => {
  return Panelists.findByPk(req.params.id, {})
    .then((panelist) => {
      if (!panelist) {
        res.status(404).send({ error: "Panelists not found" });
      } else {
        res.status(200).send(panelist);
      }
    })
    .catch((error) => res.status(400).send(error));
};

exports.update = async (req, res) => {
  // Update panelist
  const panelist = await Panelists.findByPk(req.params.id);
  if (!panelist) {
    return res.status(404).send({ error: "Panelist does not exist" });
  }

  return panelist
    .update({
      last_name: req.body.last_name,
      first_name: req.body.first_name,
      middle_name: req.body.middle_name,
      school: req.body.school,
    })
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(400).send(error));
};
