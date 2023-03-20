const Panelist = require("../models").Panelists;

exports.show = (req, res) => {
  return Panelist.findByPk(req.params.id, {})
    .then((panelists) => {
      if (!panelists) {
        res.status(404).send({ error: "Panelists not found" });
      } else {
        res.status(200).send(panelists);
      }
    })
    .catch((error) => res.status(400).send(error));
};
