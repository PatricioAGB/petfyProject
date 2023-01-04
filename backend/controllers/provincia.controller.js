const db = require("../models");
const Provincia = db.provincia;

exports.findAll = async (req, res) => {
  try {
    let provincias = await Provincia.findAll();
    console.log(provincias)
    res.status(200).send(provincias);
  } catch (error) {
    res.status(500).send("error al traer los datos");
    console.log(error);
  }
};