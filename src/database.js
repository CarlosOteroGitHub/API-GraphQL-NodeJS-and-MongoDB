import mongoose from "mongoose";

export async function connect(){
	try {
		await mongoose.connect('mongodb://localhost/mongodbgraphql', {
			useNewUrlParser: true
		});

		console.log("Conexión exitosa a la base de datos!");
	} catch(e) {
		console.log("Error: " + e);
	}
}

//Antes inicie el servidor de MongoDB, en otra terminal con el comando: mongod