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

const gameCreate = [
    {
        game: 'Battlefield 1',
        platform: 'PS4',
        year: '2016'
    },
    {
        game: 'Diablo 3',
        platform: 'PC',
        year: '2012'
    },
    {
        game: 'Fallout 4',
        platform: 'PS4',
        year: '2015'
    }
]

// const createUsers = () => {
//     return DB.Users.bulkCreate(users)
// };


	DB.Games.bulkCreate(gameCreate, function(err, games) { 

	  if (err){
		return console.log('Error:', err);
	  }

	    process.exit();
    });
