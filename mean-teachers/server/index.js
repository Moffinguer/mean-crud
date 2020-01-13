const express = require("express");
const app = express();
const morgan= require("morgan");
const {mongoose}=require("./database");
//Resposive for every port
//Settings
app.set("port",process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
//Routes
app.use("/api/teachers",require("./routers/teachers.routes"));

//Switch on Server
app.listen(app.get("port"), () => {
  console.log("Servidor en el puerto "+app.get("port"));
});