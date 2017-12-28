// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server.');

  var db = client.db('TodoApp');

  // find one and update
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a453449e972d05f9608a241')
  // }, {
  //     $set:{
  //       completed: true
  //     }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // }) ;

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a449dcc4731fa25eb1176b3')
  }, {$set:{
      name: 'Andrew'
    },$inc:{
      age: 1
    }
  }, {
    returnOriginal: true
  }).then((result) => {
    console.log(result);
  });
  //
  // client.close();
});
