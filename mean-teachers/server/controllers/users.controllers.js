const User = require("../models/users");
const bcrypt = require("bcrypt-nodejs");
const userCtrl = {};
const jwtService= require("../services/jwt.services");

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
userCtrl.loginUser=(req,res)=>{
    var params=req.body;
    var email=params.email;
    var password=params.password;
    User.findOne({email:email.toLowerCase()},(err,user)=>{
        if(err){
            res.status(500).send({message:"Error en el cercer"});
        }else{
            if(!user){
                res.status(404).send({message:"User not found"});
            }else{
                bcrypt.compare(password,user.password,(err,check)=>{
                    if(check){
                        if(params.getHash){
                            res.status(200).send({token:jwtService.createToken(user)});
                        }else{
                            res.status(200).send({message:"Al gud without get hash"});
                        }
                    }else{
                        res.status(404).send({message:"User not login"})
                    }
                });
            }
        }
    });
}
module.exports = userCtrl;
