const mongoose = require('mongoose');

mongoose.connect('mongodb://dev:teste@localhost:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

if(!db){
  console.log("Error connecting db");
}
else {
  console.log("Db connected successfully");
} 

db.Promise = global.Promise;

module.exports = mongoose;






// Added check for DB connection
