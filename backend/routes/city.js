const express = require("express");
const router = express.Router();
const user = require("../controllers/users.controller");
const city = require("../controllers/city.controller");
// retorna todos los usuarios
router.get("/ciudades", city.findAll);

module.exports = router;
