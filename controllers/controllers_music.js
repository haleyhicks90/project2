////////////////////////
//**** ALL ROUTES ****//
///////////////////////


////////////////
//Dependencies
////////////////
const express = require('express')
const router = express.Router()

//requiring our mudic model file
const Band = require('../models/models_music.js')


///////////
// ROUTES
///////////

//index route (GET)
router.get('/index/', (req, res) => {
    Band.find({}, (error, allBands) => {
        res.render('index.ejs',
            {
                bands: allBands
            }
        )
    })
})

//delete route (DELETE)
router.delete('/index/:id', (req, res) => {
    Band.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect('/index')
    })
    // res.send("deleting...")
})

//edit route (GET)
router.get('/index/:id/edit', (req, res) => {
    Band.findById(req.params.id, (error, foundBand) => {
        res.render('edit.ejs',
            {
                band: foundBand
            }
        )
    })
})

//new route (GET)
//sends user to "new" page
router.get('/index/new', (req, res) => {
    res.render('new.ejs')
})

//seed route
router.get('index/seed', (req, res) => {
    Band.create(
        [
            {
                name: "Mumford and Sons",
                origin: "London, England",
                single: "Little Lion Man",
                genre: "folk rock",
                themes: "",
                video: ""
            },
            {
                name: "Old Crow Medicine Show",
                origin: "Boone, North Carolina",
                single: "Wagon Wheel",
                genre: "Americana bluegrass",
                themes: "addiction, mental health",
                video: ""
            },
            {
                name: "Nickel Creek",
                origin: "",
                single: "",
                genre: "",
                themes: "",
                video: ""
            },
            {
                name: "Our Native Daughters",
                origin: "",
                single: "",
                genre: "",
                themes: "black struggles",
                video: "",
            },
            {
                name: "Riannon Giddons",
                origin: "",
                single: "",
                genre: "",
                themes: "fusion of mountain sounds with indigenous instruments",
                video: ""
            },
            {
                name: "Abigale Washburn",
                origin: "",
                single: "",
                genre: "",
                themes: "partnering with ",
                video: "",
            },
            {
                name: "The Carolina Chocolate Drops",
                origin: "",
                single: "",
                genre: "",
                themes: "",
                video: ""
            },
            {
                name: "Tyler Childers",
                origin: "",
                single: "",
                genre: "",
                themes: "addication, openly discussing progressive political views",
                video: ""
            },
            {
                name: "Gangstagrass",
                origin: "Brooklyn, New York",
                single: "Long Hard Times to Come",
                genre: "bluegrass/rap, 'hee-haw hip-hop'",
                themes: "",
                video: "https://www.youtube.com/watch?v=cCEHQ_nhxOA"
            },

        ],
        (error, data) => {
            res.redirect('/index')
        }
    )
})

//show route (GET)
router.get('/index/:id', (req, res) => {
    Band.findById(req.params.id, (error, foundBand) => {
        // res.send(foundBand)
        res.render('show.ejs',
            {
                band: foundBand
            }
        )
    })
})


//create route (POST)
//adds new bands to list and redirects user to the "index" page
router.post('/index', (req, res) => {
    // res.send('creating band...')
    Band.create(req.body, (error, createdBand) => {
        // res.send(req.body)
        res.redirect('/index')
    })
    // res.send(req.body)
})










//Exporting locations.js
module.exports = router;
