const {
	graphql,
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
} = require('graphql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			meuNome: {
				type: GraphQLString,
				resolve() {
					return 'Marcelo Souza';
				},
			},
		},
	}),
});

app.get('/nome', (req, res) => {
	res.status(200).send('Marcelo Souza Silva');
});

app.post('/graphql', jsonParser, async (req, res) => {
	const result = await graphql({ schema, source: req.body.query });
	res.set('Content-Type', 'application/json');
	res.status(200).send(result);
});

app.listen(4000);
