const express = require("express");
const bodyParser = require("body-parser");
const account = require("./routes/account");
const regiones = require("./routes/region");
const app = express();
const cors = require("cors");
app.use(cors());
app.enable("trust proxy");
app.use(express.json());
require("dotenv").config();
global.__basedir = __dirname;


app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("Hola Mundo!");
});
app.use("/region", regiones);
app.use("/account", account);
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`El server esta iniciado en el puerto ${PORT}`);
});
