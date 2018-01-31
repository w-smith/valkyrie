module.exports = function(sequelize, Sequelize){
    let model = sequelize.define("users", {
      name: Sequelize.STRING,
      gamertag: Sequelize.STRING
      }

    );
    return model;
  };