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
        username: 'Rectal Jam'
    },
    {
        name: 'Matt Steffey',
        username: 'MalcomFlex'
    },
    {
        name: 'Will Smith',
        username: 'HelenStellar'
    }
]

// const createUsers = () => {
//     return DB.Users.bulkCreate(users)
// };


	DB.Users.bulkCreate(userCreate, function(err, users) { 

	  if (err){
		return console.log('Error:', err);
	  }

	    process.exit();
    });
