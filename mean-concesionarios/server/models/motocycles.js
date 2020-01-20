const mongoose = require("mongoose");
const { Schema } = mongoose;
const motoSchema = new Schema({
  idMoto: { type: String, required: true },
  wheels: { type: Number, required: true }
});
module.exports = mongoose.model("Moto", motoSchema);
