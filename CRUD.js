module.exports.insertar = function (db){
  	var usuarios = db.collection('users')
	usuarios.insertMany([		// inserMany para agregar más de un usuario a la vez
		{nombre:"perez", edad:23, peso:70},
		{nombre:"gise", edad:23, peso:70},
		{nombre:"aron", edad:23, peso:70}
	])
	console.log('se insertaron correctamente 3 nuevas filas')
}

module.exports.eliminar = function (db){
  	var usuarios = db.collection('users')
	usuarios.deleteOne({edad:23}) //elimina el primero que matchea con este filtro
	console.log('se elimino el usuario...')
}

module.exports.actualizar = function (db){
  	var usuarios = db.collection('users');
	usuarios.updateOne( {edad:27}, //filtro
					  { $set: {peso:67} } ); //actualizo
	console.log('se actualizo el usuario...')
}

module.exports.leer = function (db){
  	var usuarios = db.collection('users');
	usuarios.find().toArray((err, documents)=>{
		if (err){
			console.log(err);
		}
		console.log('tabla usuarios:');
		console.log(documents);
	})
}
