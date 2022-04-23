const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connection');
// const contactsRoutes = require('./routes/contacts');

const port = process.env.PORT || 8080;
const app = express();

app  
.use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    var routes = require('./routes/contacts'); //importing route
    routes(app); //register the route
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
