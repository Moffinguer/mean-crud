const express = require("express");
const app = express();
const morgan= require("morgan");

//Resposive for every port
//Settings
app.set("port",process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));

//Routes


//Switch on Server
app.listen(app.get("port"), () => {
  console.log("Servidor en el puerto "+app.get("port"));
});