const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const contactRoute = require('./routes/contacts');
require('dotenv/config');

const port = process.env.PORT || 8080;
const app = express();

app.use('/contacts', contactRoute);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

mongoose.connect(
  process.env.MONGODB_URI,{ UseNewUrlParser: true },
  () => console.log('connected to DB...')
);

app.listen(port);