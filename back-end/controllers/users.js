const request = require('request');
const db = require('../models');
const Users = db.models.Users;

function hello(req, res){					//This is what the
	console.log('hello!!!');							//user sees when
};	

function index(req, res) {
    Users.findAll().then(function(users) {
      res.json(users);
    });
  }

module.exports.hello = hello;
module.exports.index = index;