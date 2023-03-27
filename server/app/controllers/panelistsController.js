const panelists = require("../models").panelists;
const schedules = require("../models").schedules;

exports.index = (req, res) => {
  return panelists.findAll().then((data) => {
    if (!data) {
      res.status(404).send({ error: "Panelists not found" });
    } else {
      res.status(200).send(data);
    }
  });
};

exports.test = async (req, res) => {
  const amidala = await panelists.create({
    username: "test",
    password: "test",
    last_name: "test",
    first_name: "test",
    middle_name: "test",
    school: "test",
    role_id: 1,
  });

  const sched = await schedules.create({
    group_id: 1,
    more_info: 1,
    schedule_type_id: 1,
  });
  await amidala.addSchedule(sched, { through: { is_head: false } });
  const result = await panelists.findOne({
    where: {
      username: "test",
    },
    include: { model: schedules, as: "schedules" },
  });
  res.status(200).send(result);
};

exports.show = (req, res) => {
  return panelists.findByPk(req.params.id, {})
    .then((panelist) => {
      if (!panelist) {
        res.status(404).send({ error: "Panelists not found" });
      } else {
        res.status(200).send(panelist);
      }
    })
    .catch((error) => res.status(400).send(error));
};
