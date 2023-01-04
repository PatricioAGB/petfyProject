const express = require("express");
const bodyParser = require("body-parser");
const accountHandler = require("./routes/account");
const regionesHandler = require("./routes/ubicacion");
const publicationsHandler = require("./routes/publications");
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
app.use("/region", regionesHandler);
app.use("/account", accountHandler);
app.use("/publications",publicationsHandler)
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`El server esta iniciado en el puerto ${PORT}`);
});
