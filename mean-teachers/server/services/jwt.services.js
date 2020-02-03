const jwt = require("jwt-simple");
const moment = require("moment");

var secret = "clave_secreta"; //Clave secreta app
var jwtService = {};

jwtService.createToken = (user) => {
  var payload = {
    sub: user._id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    role: user.role,
    image: user.image,
    exp: moment().add(30, "day").unix(), 
    iat: moment().unix() 
  };
  return jwt.encode(payload, secret);
};
module.exports = jwtService;
