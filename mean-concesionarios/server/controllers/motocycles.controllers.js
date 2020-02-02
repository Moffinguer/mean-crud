const Motocycle = require("../models/motocycles");
const motocycleController = {};
motocycleController.getMotocycles = async (req, res) => {
  const moto = await Motocycle.find();
  res.json(moto);
};
motocycleController.createMotocycle = async (req, res) => {
  const moto = new Motocycle({
    idMoto: req.body.idMoto,
    wheels: req.body.wheels
  });
  await moto.save();
  res.json({
    status: "Moto saved"
  });
};

motocycleController.getMotocycleById = async (req, res) => {
  const moto = await Motocycle.findById(req.params.id);
  res.json(moto);
};

motocycleController.editMotocycle = async (req, res) => {
  const { id } = req.params;
  const moto = {
    idMoto: req.body.idMoto
  };
  await Motocycle.findByIdAndUpdate(id, { $set: moto }, { new: true });
  res.json({ status: "Editado" });
};

motocycleController.deleteMotocycle = async (req, res) => {
  await Motocycle.findByIdAndDelete(req.params.id);
  res.json({ status: "Delete" });
};
module.exports = motocycleController;
