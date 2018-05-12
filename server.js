var express = require('express')
var routes = require('./routes.js')


var app = express()

 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
console.log('listening on port 3000')