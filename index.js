//seteo variables de configuracion
var MongoClient = require ('mongodb').MongoClient
var url = 'mongodb://localhost:27017/nuevaDB';
var operaciones = require('./CRUD.js');

//me conecto y realizo operación
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
	if (err) console.log(err);
    var db = client.db('nuevaDB');
    console.log("conexión exitosa");
    //operaciones.insertar(db);
    //operaciones.eliminar(db);
    //operaciones.actualizar(db);
    operaciones.leer(db);
});