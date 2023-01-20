var express = require('express')
var bodyParser = require('body-parser')
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://mydbUser:00114477@cluster0.2nody.mongodb.net/mydbUser?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
 
app.get('/', function (req, res,) {
  res.send({message: "home page"})
})
app.get('/user', function (req, res,) {
  res.send({name: "coder", email: "coder@gmail.com"})
})
app.listen(4200, function () {
  console.log('server listening on port 4200')
})