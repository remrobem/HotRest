
  
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
    return res.json(characters);
  });
  
  app.get("/api/waitlist", function(req, res) {
    return res.json(characters);
  });
  
  
  
 