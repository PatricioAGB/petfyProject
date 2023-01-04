const express = require("express");
const router = express.Router();
const regiones = require("../controllers/region.controller");
const auth = require("../middleware/auth");
const provincias =require("../controllers/provincia.controller");
// retorna todos los usuarios

router.get("/regiones",auth,regiones.findAll);

router.get("/provincia",provincias.findAll);
module.exports = router;
