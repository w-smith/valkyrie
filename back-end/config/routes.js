const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.js');
const gamesController = require('../controllers/games.js');

// router.get('/', (req, res) => {
//     res.send('Hello World Again');
// });

router.get('/hello', usersController.hello);

module.exports = router;