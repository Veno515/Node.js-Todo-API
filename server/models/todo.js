var mongoose = require('mongoose');

// A model specifying the attributes of the database
var Todo = mongoose.model('Todo', {
  text: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default:null
  }
});

module.exports = {Todo};
