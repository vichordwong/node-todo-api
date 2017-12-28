// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server.');

  // insert a new record
  var db = client.db('TodoApp');

  // delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // delete insertOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // find one and delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });


  db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
    console.log(result);
  })

  db.collection('Users').deleteOne({_id: new ObjectID('5a45299e577eb915c225639a')}).then((result) => {
    console.log(JSON.stringify(results, undefined, 2));
  })
  // client.close();
});
