const Car = require("../models/cars");
const carController = {};
carController.getCars = async (req, res) => {
  const car = await Car.find();
  res.json(car);
};
carController.createCar = async (req, res) => {
  const car = new Car({
    idCar: req.body.idCar,
    doors: req.body.doors
  });
  await car.save();
  res.json({
    status: "Car saved"
  });
};

carController.getCarById = async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.json(car);
};

carController.editCar = async (req, res) => {
  const { id } = req.params;
  const car = {
    idCar: req.body.idCar
  };
  await Car.findByIdAndUpdate(id, { $set: car }, { new: true });
  res.json({ status: "Editado" });
};

carController.deleteCar = async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ status: "Delete" });
};
module.exports = carController;
