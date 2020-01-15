const mongoose = require("mongoose");
const { Schema } = mongoose;
const SellerSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    rank: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: false }
});
module.exports = mongoose.model("Seller", SellerSchema);