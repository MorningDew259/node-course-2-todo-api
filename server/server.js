var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require ('mongodb');

//local installs
var {mongoose} = require('./db/mongoose');        //mongoose.js -> .js can be left out
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
cont port = process.env.PORT || 3000;           // for Heroku server || = or (if port is not available)

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});


app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});


app.get('/todos/:id', (req, res) => {     //get todo with ID
  var id = req.params.id;

   if (!ObjectID.isValid(id)) {         //check if ObjectID is valid
     return res.status(404).send();     //if not valid return 404 error (doesn't continue)
   };

  Todo.findById(id).then((todo) => {
    if (!todo) {                        //if no entry found return 404 error
      return res.status(404).send();
    }
      res.send({todo});                 //if everything alright return data entry
  }).catch((e) => {                     //catch any errors and return 400 error
    res.status(400).send();
  });
});


app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});


module.exports = {app};
