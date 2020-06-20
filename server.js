const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({path: './variable.env'});
const Recipe = require('./models/Recipe');
const User = require('./models/User');
const {typeDefs} = require('./schema');
const {resolvers} = require('./resolvers');

//Bring in GraphQL-Express middleware
const {graphiqlExpress, graphqlExpress} = require('apollo-server-express');
const {makeExecutableSchema} = require('graphql-tools');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

//Connect to database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(e => console.error(e));


const app = express();

// Setup middleware
app.use('/graphql',
    bodyParser.json(),
    graphqlExpress({
        schema,
        context: {
            Recipe,
            User
        }
    }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});