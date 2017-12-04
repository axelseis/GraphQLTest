import express from 'express';
import { jsonGraphqlExpress } from 'json-graphql-server';
import data from './ridersDB.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/graphql', jsonGraphqlExpress(data));
app.listen(PORT, () => {
 console.log("Server started at port: ", PORT);
});