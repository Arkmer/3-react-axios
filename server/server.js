// Base imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static Files
app.use(express.static('build'));

// Route Includes
const testRouter = require('./routes/test.router.js');

// Routes
app.use('/test', testRouter);

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});