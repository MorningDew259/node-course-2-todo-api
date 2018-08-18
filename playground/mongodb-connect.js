// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');   //same as above


//object destructuring example:
// var user = {name: 'nadja', age: 27};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {   // connect to MongoDB
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }                                    //else not needed because of return -> stops function execution
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({                       //manipulate new collection and add document
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);       //error object also printed
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));    //pretty print
  // });

  // db.collection('Users').insertOne({
  //   name: 'Nadja',
  //   age: 27,
  //   location: 'Dacula'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
