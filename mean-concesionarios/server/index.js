const express = require("express"); //Se conecta a la base de datos
const app = express();
const morgan = require("morgan");
const { mongoose } = require("./database");
const cors = require("cors"); //Utilizamos este módulo para securizar los puertos
//Resposive for every port
//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));
//Routes para extraer la información de las bbdd
app.use("/api/seller", require("./routers/sellers.routes"));
app.use("/api/buyer", require("./routers/buyers.routes"));
app.use("/api/vehicles", require("./routers/vehicles.routes"));
app.use("/api/car", require("./routers/cars.routes"));
app.use("/api/motocycles", require("./routers/motocycles.routes"));
app.use("/api/users", require("./routers/users.routes"));

//Switch on Server
app.listen(app.get("port"), () => {
  console.log("Servidor en el puerto " + app.get("port"));
});
