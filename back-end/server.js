const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const path = require('path');
const Sequelize = require('sequelize');
require('dotenv').config();
const cors = require('cors');
app.use(cors());

// Load Routes
const router = require('./config/routes');

//Middleware
app.use(bodyParser.json());

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

  //






//   app.get('/', (req, res) => {
//     return('hello');
// });




// Use Routes
app.use(express.static(__dirname + '/dist'));
app.use('/', router)




app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
  });