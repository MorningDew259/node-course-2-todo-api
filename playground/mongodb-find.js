
const {MongoClient, ObjectID} = require('mongodb');   //same as above


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {   // connect to MongoDB
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }                                    //else not needed because of return -> stops function execution
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({                        //fetch database
  //   _id: new ObjectID('5b785a95de25b56cc9870c20')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unableto fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unableto fetch todos', err);
  // });

  db.collection('Users').find({name: 'Nadja'}).count().then((count) => {
    console.log(`Users with the name Nadja: ${count}`);
  }, (err) => {
    console.log('Unable to fetch Users', err);
  });

  db.collection('Users').find({name: 'Nadja'}).toArray().then((docs) => {
    console.log('List of Users with name Nadja:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Users', err);
  });


  // db.close();
});
