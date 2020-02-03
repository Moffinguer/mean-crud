const express = require("express");
const app = express();
const morgan= require("morgan");
const {mongoose}=require("./database");
const cors=require("cors");
//Resposive for every port
//Settings
app.set("port",process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin:"http://localhost:4200"}));
//Routes
app.use("/api/teachers",require("./routers/teachers.routes"));
app.use("/api/users",require("./routers/users.routes"));
//Switch on Server
app.listen(app.get("port"), () => {
  console.log("Servidor en el puerto "+app.get("port"));
});

// {
//   "user": {
//       "_id": "5e3860f76619150ba8bf5b8a",
//       "name": "fernando",
//       "surname": "mateos",
//       "email": "fernandojosemateos.18@eusa.es",
//       "role": "ROLE_USER",
//       "image": "",
//       "password": "$2a$10$2MSqRvzwcI7WN5g.lKN2Le3EL3niMjwG2YqHA0O06mR4t4gSSR1d.",
//       "__v": 0
//   }
// }