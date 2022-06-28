var express = require('express');

var app = express();

var router = express.Router();

require("./db")

var port = process.env.port || 8080;

router.get("/", function(req, res) {
    res.json({ mensaje : 'Esto es un GET API'})
})

router.get("/:nombre", function(req, res) {
    res.json({ mensaje : 'Hola ' + req.params.nombre })
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
app.use("/api", router)
console.log('API escuchando en el puerto ' + port)