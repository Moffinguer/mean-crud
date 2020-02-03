const User = require("../models/users");
const bcrypt = require("bcrypt-nodejs");
const userCtrl = {};

userCtrl.saveUser = (req, res) => {
  const user = new User();
  var params = req.body;
  user.name = params.name;
  user.surname = params.surname;
  user.email = params.email;
  user.role = "ROLE_USER"; //NOTA, DEBEMOS CREAR UN USUARIO ADMINISTRADOR
  user.image = "";
  if (params.password) {
    //Encripta y guarda los datos
    bcrypt.hash(params.password, null, null, (err, hash) => {
      user.password = hash;
      if (user.name != null && user.surname != null && user.email != null) {
        user
          .save()
          .then(user => {
            res.status(200).send({ user: user });
          })
          .catch(user => {
            res.status(500).send({ error: error });
          });
      } else {
        res.status(200).send({ message: "Fill up the form" });
      }
    });
  } else {
    res.status(200).send({ message: "Enter the password" });
  }
};
module.exports = userCtrl;
