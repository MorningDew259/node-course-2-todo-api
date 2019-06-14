var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {             //create Mongoose Model
  text : {
    type: String,
    required: true,                              //value must exist
    minlenth: 1,                                 //empty string not allowed
    trim: true,                                  //delete space beginning or ending of value
  },
  completed: {
    type: Boolean,
    default: false                              //set default value
  },
  completedAt: {
    type: Number,
    default: null
  },
  _creator:{
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = {Todo};
