
const express = require('express');

const bodyParser = require('body-parser');

const router = require('./controllers/router');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(router);

/* const Obj = require('./database/models/object');

var user = Obj.create({ name: 'teste', cabelo:'preto', exercicio: 'maluco'}); */

// Setup server port
var port = process.env.PORT || 3000;

/* app.get('/', (req, res) => res.send('Hello World with Express')); */

app.listen(port, function () {
    console.log("Running server on port " + port);
});
