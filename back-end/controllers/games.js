const request = require('request');
const db = require('../models');
const Games = db.models.Games;


//Finds all games
function index(req, res) {
    Games.findAll().then(function(games) {
      res.json(games);
    });
  }

  //Creates new game
  function create(req, res) {
    Games.create(req.body).then(function(game){
      if(!game) res.send("Game not saved");
      res.json(game);
    });
    }
  
    //Finds Game By ID
    function show(req, res) {
      Games.findById(req.params.id)
      .then(function(game){
        if(!game) res.send("Game not found");
        else res.json(game);
      });	
    }
    
    //Updates Game
    function update(req, res) {
      Games.findById(req.params.id)
      .then(function(game){
        if(!game) res.send("Game not found");
        else return game.updateAttributes(req.body);
      })
      .then(function(game){
        res.json(game);
      });
    }
    
    //Deletes game
    function destroy(req, res) {
      Game.findById(req.params.id)
      .then(function(game){
        if(!game) res.send("Game not found");
        else return game.destroy();
      })
      .then(function(){
        res.send("Game deleted");
      });  
    }
    
    module.exports.index = index;
    module.exports.show = show;
    module.exports.create = create;
    module.exports.update = update;
    module.exports.destroy = destroy;
// module.exports.Games = Games;