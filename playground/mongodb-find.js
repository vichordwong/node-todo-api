// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server.');

  // insert a new record
  var db = client.db('TodoApp');
  // db.collection('Todos').find({
  //   _id: new ObjectID('5a452bffe972d05f96089fed')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count:  ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: "Andrew"}).toArray().then((docs) =>{
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });

  // client.close();
});
