const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql');

const logger = (req, res, next) => {
    console.log("Metodo: ", req.method);
    next();
}

app.use(logger);

app.use('/todos', graphqlHTTP({
    schema: schema,
    graphiql: true
}) )

app.get('/', (req, res, next) => {
    res.send("HOLI GRAPHQL")
})

app.listen(process.env.PORT, () => {
    console.log("Corriendo en el puerto 3000");
})

