const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


 // Todo.remove({}).then((result) => {
 //   console.log(result);
 // });

 // Todo.findOneAndRemove()

Todo.findByIdAndDelete('5c617509c6c74a0ef04c32e2').then((todo) => {
console.log(todo);
});
