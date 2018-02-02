var DB = require("../models").models;

//  var userCreate = function() {
//  	return DB.Users.bulkCreate({
//      name: 'RJ McBain',
//      gamertag: 'Rectal Jam'
//      },
//      {
//      name: 'Matt Steffey',
//      gamertag: 'MalcomFlex'
//      },
//      {
//      name: 'Will Smith',
//      gamertag: 'HellenSteller'
//      });
//  };
 
//  userCreate() 
// .then(function() {
//         process.exit();
// });

const userCreate = [
    {
        name: 'RJ McBain',
        gamertag: 'Rectal Jam'
    },
    {
        name: 'Matt Steffey',
        gamertag: 'MalcomFlex'
    },
    {
        name: 'Will Smith',
        gamertag: 'HellenSteller'
    }
]

const createUsers = () => {
    return DB.Users.bulkCreate(users)
};