const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.js');
const gamesController = require('../controllers/games.js');

router.get('/', (req, res) => {
    res.send('Use api/index');
});

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


// router.get('/hello', usersController.hello);
router.get('/api/index', usersController.index);
router.get('/api/index', usersController.create);

module.exports = router;