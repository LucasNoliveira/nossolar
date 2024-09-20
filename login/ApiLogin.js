const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const PORT = 5000;
const auth = require("./auth");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", auth);

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bl@ck100305",
  database: "nosso_lar_suburbano",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no banco de dados:", err);
    return;
  }
  console.log("Conexão ao banco de dados bem sucedida");
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
