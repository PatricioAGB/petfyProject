const express = require("express");
const bodyParser = require("body-parser");
const account = require("./routes/account");
const app = express();
const cors =require('cors');
app.use(cors());
app.enable('trust proxy');
app.use(express.json());

app.use(bodyParser.json());

app.get("/", (req, res,next) => {
  res.send("Hola Mundo!");
});

app.use("/account", account);
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`El server esta iniciado en el puerto ${PORT}`);
});
