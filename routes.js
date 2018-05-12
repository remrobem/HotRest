
var bodyParser = require("body-parser");
var path = require("path");
var express = require('express')
var app = express()

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  
  // Routes
  // =============================================================
  
 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.get("/api/tables#", function(req, res) {
    res.sendFile(path.join(__dirname, "clearTables.html"));
  });
  
  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });
  
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });
  
  module.exports = "Routes";
  
 