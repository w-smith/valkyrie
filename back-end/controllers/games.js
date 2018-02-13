const request = require('request');
const db = require('../models');
const Games = db.models.Games;

function index(req, res) {
    Games.findAll().then(function(games) {
      res.json(games);
    });
  }

module.exports.index = index;
// module.exports.Games = Games;