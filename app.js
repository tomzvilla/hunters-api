var express = require('express');
require("./db");

var app = express();

var bodyParser = require("body-parser");

var port = process.env.port || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Ruta localhost:8080/api

var router = require("./routes");
app.use("/api", router);

app.listen(port);

console.log('API escuchando en el puerto ' + port);