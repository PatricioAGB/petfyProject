const db = require("../models");
const Usuario = db.User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.login = async (req, res) => {
  //async -> Indica que la funcion va a tomar tiempo(no es instantanea)
  try {
    const login = await Usuario.findOne({
      where:{
      Email: req.body.Email,
      }
    });

    if (login == null){
      res.status(400).send("The e-mail does not exist")
      return ;
    }
    const isValid = await bcrypt.compare(req.body.Contrasena,login.Contrasena);
    if(isValid == false){
      res.status(400).send("User and/or password do not match")
      return ;
    }
    //  Creando token de validación
    //  (SECRET_TOKEN= token creado por mi/expiresIn = tiempo de acceso)
    const token = jwt.sign({idUsername:login.idUsername},process.env.SECRET_TOKEN,{expiresIn:28800});

    //  Envía al frontend los diferente valores
    res.status(200).send({token:token,id:login.idUsername,nombre:login.Nombre})
  } catch (error) {
    console.log(error);
    res.status(400).send("Error sign in ");
  }
};

exports.register = async (req, res) => {
  //async -> indica que la funcion va a tomar tiempo(no es instantanea)
  const fila = await Usuario.findOne({
    where: {
      Email: req.body.Email,
      // si encuentra un valor retorna una fila, si no encuentra retorna null
    },
  });
  if (fila != null) {
    res.status(400).send("email repetido");
    return;
  }
  try {
    let body = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword= await bcrypt.hash(body.Contrasena,salt);
    let usuario = {
      Email: body.Email,
      Contrasena: hashPassword,
      Nombre: body.Nombre,
      apellidoP: body.apellidoP,
      apellidoM: body.apellidoM,
      Edad: body.Edad,
      Genero: body.Genero,
      numeroCelular: body.numeroCelular,
    };
    //Espera a que guarde correctamente en la base de datos
    let creado = await Usuario.create(usuario);
    res.status(200).send(creado);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error the create user");
  }
};
