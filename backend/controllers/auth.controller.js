const db = require("../models");
const Usuario = db.users;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.login = async (req, res) => {
  //async -> indica que la funcion va a tomar tiempo(no es instantanea)
  try {
  const login = await Usuario.findOne({
    where:{
    email: req.body.email,
    }
  })
  console.log(req.body);
  if (login == null){
    res.status(400).send("el Correo no existe")
    return ;
  }
 const isValid = await bcrypt.compare(req.body.contrasena,login.contrasena);
 if(isValid == false){
    res.status(400).send("usuario o contraseña no coinciden")
    return ;
 }
 //creando token de validación(SECRET_TOKEN= token creado por mi/expiresIn = tiempo de acceso)
 const token = jwt.sign({idUsuario:login.idUsuario},process.env.SECRET_TOKEN,{expiresIn:28800});
 //manda al frontend los diferente valores
 res.status(200).send({token:token,id:login.idUsuario,nombre:login.nombre})
  } catch (error) {
    console.log(error)
    res.status(400).send("Error al iniciar sesión");
  }
};


exports.register = async (req, res) => {
  //async -> indica que la funcion va a tomar tiempo(no es instantanea)
  const fila = await Usuario.findOne({
    where: {
      email: req.body.email,
      // si encuentra un valor retorna una fila, si no encuentra retorna null
    },
  });
  // email repetido
  if (fila != null) {
    res.status(400).send("email repetido");
    return;
  }
  try {
    let body = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword= await bcrypt.hash(body.contrasena,salt);
    let usuario = {
      email: body.email,
      usuario: body.usuario,
      contrasena: hashPassword,
      nombre: body.nombre,
      apellidoP: body.apellidoP,
      apellidoM: body.apellidoM,
      edad: body.edad,
      genero: body.genero,
      numeroCelular: body.numeroCelular,
    };
    //espera a que se guarde correctamente en la base de datos
    let creado = await Usuario.create(usuario);
    res.status(200).send(creado);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al crear usuario");
  }
};
