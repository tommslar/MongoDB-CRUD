//seteo variables de configuracion
var url = 'mongodb://localhost:27017/nuevaDB';
var mongoose = require ('mongoose');
var operaciones = require('./CRUD_mongoose.js');


//me conecto y realizo operación
mongoose.connect(url,{ useNewUrlParser: true });
//operaciones.insertar();
//operaciones.eliminar();
operaciones.actualizar();
operaciones.leer();