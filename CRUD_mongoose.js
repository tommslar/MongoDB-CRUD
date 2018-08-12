var User = require('./models.js')

module.exports.insertar = function (){
  	var mateo = new User ({nombre:"mateo", edad:20, peso:66});
  	mateo.save();
  	console.log("usuario mateo agregado");
}

module.exports.eliminar = function (){
	User.remove({nombre:"aron"})
    .then((docs)=>{
      if(docs) {
        console.log("se borro")
      } else {
        console.log("no existe el usuario")
      }
	 }).catch((err)=>{
	     console.log("hubo un error")
	})
}

module.exports.actualizar = function (){
	User.update({nombre:"tomas"},{$set:{nombre:"adrian tomas",peso:71}},{multi:true})
    .then((docs)=>{
      if(docs) {
        console.log("se actualizo el usuario....")
      } else {
        console.log("no existe el usuario")
      }
	 }).catch((err)=>{
	     console.log("hubo un error")
	})
}

module.exports.leer = function (){
	console.log("Leyendo tabla de usuarios......")
  	User.find({})
  	.then((data)=>{
     console.log(data);
	})
	.catch((err)=>{
	  console.log(err);
	})
}
