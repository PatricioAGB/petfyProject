const express = require("express");
const router = express.Router();
const user = require('../controllers/users.controller')
//crea usuarios
router.post("/user",user.create );
// retorna todos los usuarios
router.get("/users",user.findAll)



module.exports = router;
