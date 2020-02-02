const Seller = require("../models/sellers");
const sellerController = {};
sellerController.getSellers = async (req, res) => {
  const sell = await Seller.find();
  res.json(sell);
};
sellerController.createSeller = async (req, res) => {
  const sell = new Seller({
    name: req.body.name,
    surname: req.body.surname,
    rank: req.body.rank,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email
  });
  await sell.save();
  res.json({
    status: "Seller saved"
  });
};

sellerController.getSellerById = async (req, res) => {
  const sell = await Seller.findById(req.params.id);
  res.json(sell);
};

sellerController.editSeller = async (req, res) => {
  const { id } = req.params;
  const sell = {
    name: req.body.name,
    surname: req.body.surname,
    rank: req.body.rank,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email
  };
  await Seller.findByIdAndUpdate(id, { $set: sell }, { new: true });
  res.json({ status: "Editado" });
};

sellerController.deleteSeller = async (req, res) => {
  await Seller.findByIdAndDelete(req.params.id);
  res.json({ status: "Delete" });
};
module.exports = sellerController;
