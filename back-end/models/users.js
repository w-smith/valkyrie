module.exports = function(sequelize, Sequelize){
    let usersModel = sequelize.define("user", {
      name: Sequelize.STRING,
      gamertag: Sequelize.STRING
      }

    );
    return usersModel;
  };