const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

var routes = require('./routes/route');
app.use('/api', routes);

module.exports = app;