const mongoose= require("mongoose");
const URI= "mongodb://localhost/mean_concesionarios";

mongoose.connect(URI)
    .then(db=>console.log("Connected"))
    .catch(err=>console.log("Not Connected"));

module.exports=mongoose;