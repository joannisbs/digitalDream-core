/* // node-typescript/src/entry.ts

import server from './server';
const mongoose = require('mongoose');

mongoose.connect('mongodb://dev:teste@mongo:27017/object_db', () => {
  console.log('as');

  var userSchema = new mongoose.Schema({
    username: String,
    email: String
}, { collection: 'usercollection' }
);
 
var userName = 'teste';
var userEmail = 'adalberto';

var Users = mongoose.model('usercollection', userSchema, 'usercollection');
var user = new Users({ username: userName, email: userEmail });
user.save(()=> 'saved');

});



server.listen(3000, () => {
  console.log(`[SERVER] Running at http://localhost:3000`);
});


 */


// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

// Import routes
/* let apiRoutes = require("./api-routes"); */
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://dev:teste@localhost:27017/admin', { useNewUrlParser: true});

var db = mongoose.connection;

// Added check for DB connection
if(!db){
  console.log("Error connecting db")
}
else {
  console.log("Db connected successfully")
  setTimeout(() => testeDb(), 2)
}

// Setup server port
var port = process.env.PORT || 3000;

// Send message for default URL
app.get('/', (_req: any, res: { send: (arg0: string) => any; }) => res.send('Hello World with Express'));

// Use Api routes in the App
/* app.use('/api', apiRoutes); */
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running server on port " + port);
});

const testeDb = () => {
  console.log('inicaindo teste')
  var userSchema = new mongoose.Schema({
    username: String,
    email: String
}, { collection: 'usercollection' }
);
 
var userName = 'teste';
var userEmail = 'adalberto';

var Users = mongoose.model('usercollection', userSchema, 'usercollection');
var user = new Users({ username: userName, email: userEmail });
user.save(()=> 'saved');


}