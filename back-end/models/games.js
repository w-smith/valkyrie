module.exports = function(sequelize, Sequelize){
    let model = sequelize.define("games", {
      name: Sequelize.STRING,
      console: Sequelize.STRING,
      year: Sequelize.STRING
      }

    );
    return model;
  };