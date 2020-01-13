const express = require("express");
const morgan= require("morgan");

//Connect and create DB
const {mongoose}=require("./database");

const app = express();
//Resposive for every port

//Middlewares
app.use(morgan("dev"));
app.use(express.json());


//Routes
app.use("/api/teachers",require("./routers/teachers.routes"));

//Switch on Server
app.listen(app.get("port"), () => {
  console.log("Servidor en el puerto "+app.get("port"));
});


//Settings
app.set("port",process.env.PORT || 3000);
