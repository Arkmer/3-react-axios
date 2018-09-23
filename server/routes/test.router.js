// Base setup
const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('This is the server!');
    console.log('This is the server!');
})

module.exports = router;