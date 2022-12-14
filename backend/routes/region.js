const express = require("express");
const router = express.Router();
const regiones = require("../controllers/region.controller");
const auth = require("../middleware/auth");
// retorna todos los usuarios

router.get("/regiones",auth,regiones.findAll);

module.exports = router;
