const mongoose = require("mongoose");
const { Schema } = mongoose;
const carSchema = new Schema({
  idCar: { type: String, required: true },
  doors: { type: Number, required: true }
});
module.exports = mongoose.model("Car", carSchema);
