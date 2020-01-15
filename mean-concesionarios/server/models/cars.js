const mongoose = require("mongoose");
const { Schema } = mongoose;
const carSchema = new Schema({
    idMoto:{type:String,required:true},
    doors:{type:Number,required:true}
});
module.exports = mongoose.model("Car", carSchema);