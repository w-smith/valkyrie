const request = require('request');
const db = require('../models');
const Users = db.models.Users;

// function hello(req, res){					//This is what the
// 	console.log('hello!!!');							//user sees when
// };	

function index(req, res) {
    Users.findAll().then(function(users) {
      res.json(users);
    });
  }

  function create(req, res) {
	Users.create(req.body).then(function(user){
	  if(!user) res.send("User not saved");
	  res.json(user);
	});
  }

  function show(req, res) {
    Users.findById(req.params.id)
    .then(function(user){
      if(!user) res.send("User not found");
      else res.json(user);
    });	
  }
  
  function update(req, res) {
    Users.findById(req.params.id)
    .then(function(user){
      if(!user) res.send("User not found");
      else return user.updateAttributes(req.body);
    })
    .then(function(user){
      res.json(user);
    });
  }
  
  function destroy(req, res) {
    User.findById(req.params.id)
    .then(function(user){
      if(!user) res.send("User not found");
      else return user.destroy();
    })
    .then(function(){
      res.send("User deleted");
    });  
  }
  
  module.exports.index = index;
  module.exports.show = show;
  module.exports.create = create;
  module.exports.update = update;
  module.exports.destroy = destroy;