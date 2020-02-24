const jwt = require("jwt-simple");
const moment = require("moment");
//Confirmamos que la clave secreta está securizada, nos la pasan por la cabecera y además es válida para el usuario
var secret = "clave_secreta";
const authenticated = {};
authenticated.ensureAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(403).send({ message: "Request without headers authority" });
  } else {
    var token = req.headers.authorization.replace(/['"]+/g, "");
    try {
      var payload = jwt.decode(token, secret);
      if (payload.exp <= moment().unix()) {
        res.status(401).send({ message: "Token expired" });
      }
    } catch (error) {
      res.status(404).send({ message: "Token not valid" });
    }
    req.user = payload;
    next();
  }
};

module.exports = authenticated;
