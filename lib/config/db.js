const mongoose = require('mongoose');
const mongoDB = 'mongodb://root:hardy12345@ds223253.mlab.com:23253/nodeone';

mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, { useNewUrlParser: true });

module.exports = mongoose;