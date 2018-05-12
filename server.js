var express = require('express')
var app = express()
var routes = require('./routes.js');


app.get('/', function (req, res) {
  res.send('Hello World')
})
 

var tables = {

name: '',
phoneNumber: '',
email: '',
uniqueID: ''

}


app.listen(3000)
console.log('listening on port 3000')