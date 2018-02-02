module.exports = function(sequelize, Sequelize){
  // console.log(Sequelize);
    let usersModel = sequelize.define("user", {
      name: Sequelize.STRING,
      gamertag: Sequelize.STRING
      }
      
    );
    // console.log(usersModel);
    return usersModel;
  };