//check mongoose.com -docs -queries
const {ObjectID} = require ('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b8db13a5d5795b094f39b4611';
//
// if (!ObjectID.isValid(id)) {            //checks if ID is valid
//   console.log('ID not valid');
// };

// Todo.find({                     //-if does not exist: returns empty array []
//   _id : id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({            //returns only first hit -if does not exist: returns null
//   _id : id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {        //-if does not exist: returns null (without if)
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));        //catch if id is invalid


var id = '5b79959cfaac1f904c7ecf0d11';

User.findById(id).then((user) => {
  if (!user){                                     //if user does not exist in user file but id length correct
    return console.log('User not found');       //return -> does not do next log
  };
  console.log('User', user);
}, (e) => {
  console.log(e);
});
