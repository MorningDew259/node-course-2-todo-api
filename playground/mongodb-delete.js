
const {MongoClient, ObjectID} = require('mongodb');   //same as above


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {   // connect to MongoDB
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }                                    //else not needed because of return -> stops function execution
  console.log('Connected to MongoDB server');

//deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

//deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //     console.log(result);
  // });

//findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

// db.collection('Users').deleteMany({name: 'Nadja'});

db.collection('Users').findOneAndDelete({_id: new ObjectID('5b763b399c43bd0f1f844035')}).then((result) => {
  console.log(result);
});



  // db.close();
});
