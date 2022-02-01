import express from "express";
import { graphqlHTTP } from 'express-graphql'
import schema from "./schema";
import { connect } from "./database";

var app = express();
connect();

app.get("/", function(req, res){
	res.send("<strong>GraphQL!</strong> <br><br>Entra a: http://localhost:3000/graphql");
});

app.use("/graphql", graphqlHTTP({
	graphiql: true,
	schema: schema
}));

app.listen(3000);