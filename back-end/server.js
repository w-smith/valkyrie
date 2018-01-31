const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

// Load Routes
const router = require('./config/routes');










// Use Routes
app.use('/', router)

app.listen(process.env.PORT || port, () => {
	console.log(`Listening on ${port}`);
});