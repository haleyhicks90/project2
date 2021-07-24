////////////////////////
//**** ALL ROUTES ****//
///////////////////////


////////////////
//Dependencies
////////////////
const express = require('express')
const router = express.Router

const Location = require('../models/locations.js')


///////////
// ROUTES
///////////

//update route (PUT)
router.put('/locations/:id', (req, res) => {
    if (req.body.visited === 'on') {
        req.body.visited = true
    } else {
        req.body.visited = false
    }
    Location.findByIdAndUpdate(req.params.id, req.body, (error, updatedLocation) => {
        res.redirect('/locations')
    })
    // res.send(req.body)
})

//delete route (DELETE)
router.delete('/locations/:id', (req, res) => {
    Location.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect('/locations')
    })
    // res.send('deleting...')
})

//edit route (GET)
//this info is submitted to the update route
router.get('/locations/:id/edit', (req, res) => {
    Location.findById(req.params.id, (error, foundLocation) => {
        res.render('edit.ejs',
            {
                location: foundLocation
            }
        )
    })
})

//index route (GET)
app.get('/locations', (req, res) => {
    Location.find({}, (error, allLocations) => {
        res.render('index.ejs',
            {
                locations: allLocations
            }
        )
    })
})

//new route (GET)
//submits to the create route
//needs to come before show route
router.get('/locations/new', (req, res) => {
    // res.send('new')
    res.render('new.ejs')
})

//show route (GET)
router.get('/locations/:id', (req, res) => {
    Location.findById(req.params.id, (error, foundLocation) => {
        // res.send(foundLocation)
        res.render('show.ejs',
            {
                location: foundLocation
            }
        )
    })
})

//create route (POST)
router.post('/locations', (req, res) => {
    if (req.body.visited === 'on') {
        req.body.visited = true
    } else {
        req.body.visited = false
    }
    // res.send('creating location')
    Location.create(req.body, (error, createdLocation) => {
        // res.send(createdLocation)
        res.redirect('/locations')
    })
})


//Exporting locations.js
module.exports = router;
