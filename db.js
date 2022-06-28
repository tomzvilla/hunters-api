var mongoose = require("mongoose");
var MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/web';
mongoose.connect(MONGO_URL);

mongoose.connection.on("connected", function(){
    console.log("Conectado a la BD: " + MONGO_URL);
})

mongoose.connection.on("error", function(err){
    console.log("Error al conectar a la BD: " + err);
});

mongoose.connection.on("disconnected", function(){
    console.log("Desconectado de la BD: ");
})

process.on("SIGINT", function(){
    mongoose.connection.close(function(){
        console.log("Desconectado de la BD al terminar la app");
        process.exit(0);
    })
})