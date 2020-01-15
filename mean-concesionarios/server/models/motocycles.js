const mongoose = require("mongoose");
const { Schema } = mongoose;
const motoSchema = new Schema({
    idCar:{type:String,required:true},
    wheels:{type:Number,required:true}
});
module.exports = mongoose.model("Moto", motoSchema);
