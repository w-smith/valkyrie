const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const path = require('path');
require('dotenv').config();

// Load Routes
const router = require('./config/routes');

// Heroku Crap
if(!process.env.DYNO) {
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials", "true");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
      next();
    });
  }







// Use Routes
app.use('/', router)
app.use(express.static(__dirname + '/dist'));



app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
  });