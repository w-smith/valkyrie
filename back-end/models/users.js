module.exports = function(sequelize, Sequelize){
    let usersModel = sequelize.define("user", {
      email: Sequelize.STRING,
      xbox: Sequelize.STRING,
      psn: Sequelize.STRING,
      bnet: Sequelize.STRING,
      steam: Sequelize.STRING
      }
      
    );
    // console.log(usersModel);
    return usersModel;
  };

  