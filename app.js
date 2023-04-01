const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/', routes)


module.exports = app;