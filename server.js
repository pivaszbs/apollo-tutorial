const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({path: './variable.env'});
const Recipe = require('./models/Recipe');
const User = require('./models/User');
const {typeDefs} = require('./schema');
const {resolvers} = require('./resolvers');
const cors = require('cors');
const jwt = require('jsonwebtoken');

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

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}

// Setup middleware

app.use(cors(corsOptions));

//Setup JWT middleware

app.use(async (req, res, next) => {
    const token = req.headers['authorization'];
    if (token !== 'null') {
        try {
            const currentUser = await jwt.verify(token, process.env.SECRET);
            req.currentUser = currentUser;
        } catch (err) {
            console.error(err);
        }
    }
    next();
})

app.use('/graphql',
    bodyParser.json(),
    graphqlExpress(({ currentUser }) => ({
        schema,
        context: {
            Recipe,
            User,
            currentUser
        }
    }))
);

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});