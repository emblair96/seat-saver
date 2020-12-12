var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = 3000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];
const waitlist =[];
  
  // Routes
  // =============================================================
  
  // Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
  });

  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "/view.html"));
  });

  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "/add.html"));
  });


  // Displays all characters
  app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(reservations);
  });
  
  // Displays a single character, or returns false
  app.get("/api/reservations", function(req, res) {

    res.json(reservations);
    
  });
  
  // Create New Characters - takes in JSON input
  app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    console.log(newReservation);
  
    reservations.push(newReservation);
  
    res.json(newReservation);
  });

//   fs.appendFile("view.html", `${unique-id}`, (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
//   });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  