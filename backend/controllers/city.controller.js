const db = require("../models");
const Ciudad = db.city;

exports.findAll = async (req, res) => {
  try {
    let ciudades = await Ciudad.findAll();
    res.status(200).send(ciudades);
  } catch (error) {
    res.status(500).send("error al traer los datos");
    console.log(error);
  }
};
