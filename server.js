var express = require('express');

var app = express();

var port = process.env.port || 8080;

app.get("/", function(req, res) {
    res.json({ mensaje : 'Esto es un GET'})
})

app.get("/cerveza", function(req, res) {
    res.json({ mensaje : 'CHUPAME EL PICO'})
})

app.post("/", function(req,res){
    res.json({mensaje : 'Esto es un post'})
})

app.delete('/', function(req, res) {
    res.json({ mensaje: 'Método delete' })  
  })

app.listen(port)
console.log('API escuchando en el puerto ' + port)