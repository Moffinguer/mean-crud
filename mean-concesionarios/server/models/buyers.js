const mongoose = require("mongoose");
const { Schema } = mongoose;
const BuyerSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    idSeller: { type: String, required: true },
    dni: { type: String, required: true },
    phoneNumber: { type: String, required: false },
    email: { type: String, required: true },
    minMoney:{type: Number,required:false},
    idVehicleToBuy:{type:Number,required:false}
});
module.exports = mongoose.model("Buyer", BuyerSchema);