const jwt = require("jwt-simple");
const moment = require("moment");

var secret = "clave_secreta"; //Clave secreta app
var jwtService = {};
//Creamos un token securizado con nuestra clave secreta con los datos de nuestro administrador o usuario correspondiente
jwtService.createToken = user => {
  var payload = {
    sub: user._id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    role: user.role,
    image: user.image,
    exp: moment()
      .add(30, "day")
      .unix(),
    iat: moment().unix()
  };
  return jwt.encode(payload, secret);
};
module.exports = jwtService;
