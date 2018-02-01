module.exports = function(sequelize, Sequelize){
    let gamesModel = sequelize.define("game", {
      name: Sequelize.STRING,
      console: Sequelize.STRING,
      year: Sequelize.STRING
      }

    );
    return gamesModel;
  };