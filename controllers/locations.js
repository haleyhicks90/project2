///////////////////////
// ALL OF OUR ROUTES//
//////////////////////


////////////////
//Dependencies
////////////////
const express = require('express')
const router = express.Router

//below: DON'T FORGET TO UNCOMMENT THIS AFTER CREATING LOCATIONS.JS IN MODELS
// const Location = require('../models/locations.js')


///////////
// ROUTES
///////////

//index route (GET)
router.get('/locations', (req, res) => {
    res.render('index.ejs')
})





//Exporting locations.js
module.exports = router;
