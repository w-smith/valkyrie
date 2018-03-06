const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.js');
const gamesController = require('../controllers/games.js');



// index
router.get('/api/users', usersController.index);

// create
router.post('/api/users', usersController.create);

// show
router.get('/api/users/:id', usersController.show);

// update
router.put('/api/users/:id', usersController.update);

// destroy
router.delete('/api/users/:id', usersController.destroy);

// index
router.get('/api/games', gamesController.index);

// create
router.post('/api/games', gamesController.create);

// show
router.get('/api/games/:id', gamesController.show);

// update
router.put('/api/games/:id', gamesController.update);

// destroy
router.delete('/api/games/:id', gamesController.destroy);


// router.get('/hello', usersController.hello);
router.get('/api/index', usersController.index);
router.get('/api/index', usersController.create);

module.exports = router;