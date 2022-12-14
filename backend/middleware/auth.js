const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  //verificar si existe el token
  const token = req.headers["authorization"];
  //separa el bearer y toma el token 
  const bearer = token.split(' ')[1];
  if (token == null) {
    res.status(401).send("acceso denegado");
  }
  try {
    //compara si el token es valido
    const decoded = jwt.verify(bearer,process.env.SECRET_TOKEN);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(token)
    res.status(400).send('error token ')
  }


};
