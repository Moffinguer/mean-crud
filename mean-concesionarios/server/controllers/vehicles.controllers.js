const Vehicle = require("../models/vehicles");
const vehicleController = {};
vehicleController.createVehicle = async (req, res) => {
  const sell = new Vehicle({
    marc: req.body.marc,
    brand: req.body.brand,
    model: req.body.model,
    color: req.body.color,
    type: req.body.type
  });
  await sell.save();
  res.json({
    status: "Vehicle saved"
  });
};
vehicleController.getVehicles = async (req, res) => {
  const vehicles = await Vehicle.find();
  res.json(vehicles);
};

vehicleController.getVehicleById = async (req, res) => {
  const vehicles = await Vehicle.findById(req.params.id);
  res.json(vehicles);
};

vehicleController.editVehicle = async (req, res) => {
  const { id } = req.params;
  const vehicles = {
    id: req.body.id,
    brand: req.body.brand,
    model: req.body.model,
    color: req.body.color,
    type: req.body.type
  };
  await Vehicle.findByIdAndUpdate(id, { $set: vehicles }, { new: true });
  res.json({ status: "Editado" });
};

vehicleController.deleteVehicle = async (req, res) => {
  await Vehicle.findByIdAndDelete(req.params.id);
  res.json({ status: "Delete" });
};
module.exports = vehicleController;
