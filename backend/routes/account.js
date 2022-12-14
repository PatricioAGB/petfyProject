const express = require("express");
const router = express.Router();
const usuario = require('../controllers/auth.controller')


//ruta del login
router.post("/login",usuario.login);
//ruta del registro
router.post("/register",usuario.register);





module.exports = router;
