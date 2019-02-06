// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')


  //delete many
  // db.collection('ToDos').deleteMany({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  //delete one
  // db.collection('ToDos').deleteOne({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  //find one and delete
  // db.collection('ToDos').findOneAndDelete({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  //delete many users
  // db.collection('Users').deleteMany({name: Veino Yusuf});

  //find and delete one user
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5c557efb361cae264ce667d3")
}).then((results) => {
  console.log(JSON.stringify(results, undefined, 2));
});

   // client.close();
});
