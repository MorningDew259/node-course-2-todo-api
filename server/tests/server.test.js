var expect = require('expect');
var request = require('supertest');

const {app} = require('./../server');       // ./../ => back one directory
const {Todo} = require('./../models/todo');

const todos =[{
  text: 'First test todo'
}, {
  text: 'Second test todo'
}];


beforeEach((done) => {                 // database empty before each request needed for todos.length..
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)              //request = supertest
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) =>{
        if (err) {
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);       //expects to have one entry in the database
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });


  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')               //URL: /todos
      .send({})                       //invalid (empty object send)
      .expect(400)
      .end((err, res) => {          //if error -> return stops function execution
        if (err) {
          return done(err);         // pass in error so test fails
        }

    Todo.find().then((todos) => {     //fetch from collection
      expect(todos.length).toBe(2);   //2 todos should be in data base
      done();
    }).catch((e) => done(e));         //catch errors
  });
});
});


describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});
