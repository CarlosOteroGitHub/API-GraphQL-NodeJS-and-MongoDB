import User from "./models/User";

export const resolvers = {
	Query: {
		hello: () => {
			return "Hola mundo con GraphQL";
		},

		greet(root, args){
			return `Hola ${args.name}!`;
		},

		//Función para consultar la colección de usuarios.
		async Users(){
			return await User.find();
		},

		//Función para consultar un solo registro mediante el ID.
		async UserID(_, { _id }){
			return await User.findById(_id);
		}
	},

	Mutation: {
		//Función para la creación de usuarios.
		async createUser(_, { input }){
			const newUser = new User(input);
			await newUser.save();
			return newUser;
		},

		//Funcíón para eliminar un usuario.
		async deleteUser(_, { _id }){
			return await User.findByIdAndDelete(_id);
		},

		//Función para actualizar un usuario.
		async updateUser(_, { _id, input }){
			return await User.findByIdAndUpdate(_id, input, { new: true });
		}
	},
};

/*

NOTA: Para verificar la API de GraphQL, ingrese a la URL: http://localhost:3000/graphql y en cada caso verifique el CRUD, mediante las siguientes intrucciones:

======= CREAR =======

mutation {
  createUser(input: {
    name: "[nombre]",
    apellidos: "[apellidos]",
    edad: [edad]
  }) {
    _id
    name
    apellidos
    edad
  }
}


======= CONSULTAR =======


query {
  Users {
    _id
    name
    apellidos
    edad
  }
}


======= CONSULTAR POR ID =======

query {
  UserID(_id: "[id]") {
    _id
    name
    apellidos
    edad
  }
}




======= ELIMINAR =======

mutation {
  deleteUser(_id: [id]){
    _id
    name
    apellidos
    edad
  }
}


======= ACTUALIZAR =======

mutation {
  updateUser(
    _id: "[id]",
    input: {
      name: "[nombre]"
      apellidos: "[apellidos]"
      edad: [edad]
    }
  ){
    _id
    name
    apellidos
    edad
  }
}

*/