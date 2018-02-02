const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.js');
const gamesController = require('../controllers/games.js');

router.get('/', (req, res) => {
    res.send('Use api/index');
});

// router.get('/hello', usersController.hello);
router.get('/api/index', usersController.index);
router.get('/api/index', usersController.create);

module.exports = router;