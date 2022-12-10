
const db = require("../models");
const Usuario = db.users;
//crear usuario en la base de datos
exports.create = async (req, res) => {
  //async -> indica que la funcion va a tomar tiempo(no es instantanea)
  try {
    let body = req.body;
    let usuario = {
      nombre: body.nombre,
      apellido: body.apellido,
      edad: body.edad,
    };
    //espera a que se guarde correctamente en la base de datos
    let creado =await Usuario.create(usuario);
    res.status(200).send(creado);
  } catch(error) {
    res.status(500).send("Error al crear usuario");
  }
};

exports.findAll = async(req,res) =>{
    try{
        let usuarios = await Usuario.findAll()
        res.status(200).send(usuarios)
    }catch(error){
        res.status(500).send('error al traer los datos')
        console.log(error);
    }
}