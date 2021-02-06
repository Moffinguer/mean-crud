const mongoose= require("mongoose");
const URI= "mongodb://localhost/mean_crud";

mongoose.connect(URI).then(db=>console.log("Connected")).catch(err=>console.log("Not Connected"));

module.exports=mongoose;