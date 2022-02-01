import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from "./resolvers";

const typeDefs = `
	
	type Query {
		hello: String
		greet(name: String!): String
		Users: [User]
		UserID(_id: ID!): User
	}

	type User {
		_id: ID
		name: String!
		apellidos: String!
		edad: Int!
	}

	type Mutation {
		createUser(input: UserInput): User
		deleteUser(_id: ID): User
		updateUser(_id: ID, input: UserInput): User
	}

	input UserInput {
		name: String!
		apellidos: String!
		edad: Int!
	}
`;

export default makeExecutableSchema({
	typeDefs: typeDefs,
	resolvers: resolvers
})