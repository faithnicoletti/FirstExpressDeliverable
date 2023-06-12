// Load express
const express = require('express');
const path = require('path');

//require Plants db
const plantsDb = require('./data/plants-db');
// Create our express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 
  
// Mount middleware (app.use)
  
  
// Mount routes
// Define a "root" route directly on app
app.get('/', function (req, res) {
  res.redirect('/plants');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/plants', function(req, res) {
       const plants = plantsDb.getAll();
       res.render('plants/index', { plants});
    });


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});