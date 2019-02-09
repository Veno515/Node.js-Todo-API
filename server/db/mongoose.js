var mongoose = require('mongoose');

var mongodbUri = 'mongodb://test:test999@ds127535.mlab.com:27535/todo-app';

// mongoose configuration
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp' || mongodbUri, { useNewUrlParser: true });

module.exports = {mongoose};
