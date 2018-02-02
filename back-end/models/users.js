module.exports = function(sequelize, Sequelize){
    let usersModel = sequelize.define("user", {
      name: Sequelize.STRING,
      username: Sequelize.STRING
      }
      
    );
    // console.log(usersModel);
    return usersModel;
  };