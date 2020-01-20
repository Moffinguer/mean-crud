const Buyer = require("../models/buyers");
const BuyerController = {};
BuyerController.getBuyers = async (req, res) => {
  const buyer = await Buyer.find();
  res.json(buyer);
};
BuyerController.createBuyer = async (req, res) => {
  const buyer = new Buyer(req.body);
  await buyer.save();
  res.json({
    status: "Buyer saved"
  });
};

BuyerController.getBuyerById = async (req, res) => {
  const buyer = await Buyer.findById(req.params.id);
  res.json(buyer);
};

BuyerController.editBuyer = async (req, res) => {
  const { id } = req.params;
  const buyer = {
    name: req.body.name,
    surname: req.body.surname,
    idSeller: req.body.idSeller,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    minMoney: req.body.minMoney,
    idVehicleToBuy: req.body.idVehicleToBuy
  };
  await Buyer.findByIdAndUpdate(id, { $set: buyer }, { new: true });
  res.json({ status: "Editado" });
};

BuyerController.deleteBuyer = async (req, res) => {
  await Buyer.findByIdAndDelete(req.params.id);
  res.json({ status: "Delete" });
};
module.exports = BuyerController;
