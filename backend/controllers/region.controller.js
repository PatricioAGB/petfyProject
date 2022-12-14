const db = require("../models");
const Region = db.region;

exports.findAll = async (req, res) => {
  try {
    let regiones = await Region.findAll();
    res.status(200).send(regiones);
  } catch (error) {
    res.status(500).send("error al traer los datos");
    console.log(error);
  }
};
