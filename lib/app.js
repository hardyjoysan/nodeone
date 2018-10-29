const express = require('express');
const logger = require('morgan');
const mongoose = require('./config/db');

const app = express();

// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));

var routes = require('./routes/route');
app.use('/api', routes);

module.exports = app;