const {ObjectID} = require ('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {         //remove requires input {}; only returns n
//   console.log(result);
// });

//Todo.findOneAndRemove     //returns doc
//Todo.findByIdAndRemove    //returns doc

// Todo.findOneAndRemove({_id: '5b908d66de25b56cc9906218'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5b908d66de25b56cc9906218').then((todo) => {
  console.log(todo);
});
