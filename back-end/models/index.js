//Connect
let Sequelize = require('sequelize');
let sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://RJ@localhost:5432/valkyrie');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

let Users = sequelize.import("./users");
let Games = sequelize.import("./games");

Games.belongsTo(Users);
Users.hasMany(Games, {foreignKey: 'email'});

module.exports.models = {
	Users: Users,
    Games: Games
};

