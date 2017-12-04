import express from 'express';
import { jsonGraphqlExpress } from 'json-graphql-server';
import championship from './riders.js';
import data from './ridersDB.js';

const PORT = 3000;
const app = express();

app.use('/graphql', jsonGraphqlExpress(data));
app.listen(PORT);