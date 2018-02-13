module.exports = function(sequelize, Sequelize){
    let gamesModel = sequelize.define("game", {
      game: Sequelize.STRING,
      platform: Sequelize.STRING,
      year: Sequelize.STRING
      }

    );
    return gamesModel;
  };

//   const User = require('./users');
// // using relation from sequalize // 
// User.hasMany(Order, {foreignKey: 'user_id'});