
const {MongoClient, ObjectID} = require('mongodb');   //same as above


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {   // connect to MongoDB
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }                                    //else not needed because of return -> stops function execution
  console.log('Connected to MongoDB server');

//findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b78a839de25b56cc9872dda')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false                //if true returns values before change
  // }).then((result) => {
  //   console.log(result);
  // });

//challenge: change name to Nadja and change age +1 (increment)
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b763b2adafc6f0f1d15e41a')
  }, {
    $set: {
      name: 'Nadja'
    },
    $inc: {
      age: 1
      }
    }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });





  // db.close();
});
