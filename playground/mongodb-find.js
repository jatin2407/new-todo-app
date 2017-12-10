//const MongoClient = require('mongodb').MongoClient;

const {MongoClient , ObjectId} = require('mongodb');
var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('todos').find({
  //   _id: new ObjectId('5a2d0e172961e2b9140b96c2')
  // }).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   if(err){
  //      return console.log("Unable to fetch data");
  //   }
  // });
  //
  // db.collection('todos').find().count().then((count) => {
  //   console.log(JSON.stringify(count, undefined, 2));
  // }, (err) => {
  //   if(err){
  //      return console.log("Unable to fetch data");
  //   }
  // });

  db.collection('Users').find({name:'JAtin'}).count().then((count) => {
    console.log(JSON.stringify(count, undefined, 2));
  }, (err) => {
    if(err){
       return console.log("Unable to fetch data");
    }
  });


  // db.close();
});
