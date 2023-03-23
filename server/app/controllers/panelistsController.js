const panelists = require("../models").panelists;
exports.index = (req, res) => {
  return panelists.findAll().then((data) => {
    if (!data) {
      res.status(404).send({ error: "Panelists not found" });
    } else {
      res.status(200).send(data);
    }
  });
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
