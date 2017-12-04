import express from 'express';
import { jsonGraphqlExpress } from 'json-graphql-server';
import data from './ridersDB.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
})

app.use('/graphql', jsonGraphqlExpress(data));
app.listen(PORT, () => {
 console.log("Server started at port: ", PORT);
});