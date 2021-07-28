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

//update route (PUT)
router.put('/index/:id', (req, res) => {
    Band.findByIdAndUpdate(req.params.id, req.body, (error, updatedBand) => {
        res.redirect('/index')
    })
    // res.send(req.body)
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
router.get('/index/seed', (req, res) => {
    Band.create(
        [
            {
                name: "Mumford and Sons",
                origin: "London, England",
                single: "Little Lion Man",
                genre: "folk / rock",
                themes: "",
                video: "https://www.youtube.com/watch?v=lLJf9qJHR3E"
            },
            {
                name: "Old Crow Medicine Show",
                origin: "Boone, North Carolina",
                single: "Wagon Wheel",
                genre: "Americana / bluegrass",
                themes: "addiction / mental health",
                video: "https://www.youtube.com/watch?v=1gX1EP6mG-E"
            },
            {
                name: "Nickel Creek",
                origin: "Carlsbad, California",
                single: "This Side",
                genre: "Americana / folk / bluegrass",
                themes: "",
                video: "https://www.youtube.com/watch?v=_nneEIX59I8"
            },
            {
                name: "Our Native Daughters",
                origin: "Lafayette, Louisiana",
                single: "Black Myself",
                genre: "struggle & protest / bluegrass / Americana / folk",
                themes: "black struggles / historic and modern-day slavery",
                video: "https://www.youtube.com/watch?v=vjd9zlSiHZM",
            },
            {
                name: "Rhiannon Giddens",
                origin: "Greensboro, North Carolina",
                single: "Little Margaret",
                genre: "bluegrass / old-time mountain / blues",
                themes: "fusion of mountain sounds with indigenous instruments",
                video: "https://www.youtube.com/watch?v=e2h8K2eHS5w"
            },
            {
                name: "Wu Fei & Abigail Washburn",
                origin: "Beijing, China/Evanston, Illinois",
                single: "Water is Wide/Wusuli Boat Song",
                genre: "'kung-fu Appalachian' / folk-rock",
                themes: "fusion of traditional Chinese folk music with Appalachian mountain music",
                video: "https://www.youtube.com/watch?v=jS0qh5x8WfQ"
            },
            {
                name: "The Highwomen",
                origin: "Nashville, Tennessee",
                single: "Highwomen",
                genre: "country / Americana",
                themes: "LGBTQIA+ story telling / non-traditional female roles in society",
                video: "https://www.youtube.com/watch?v=7D-6nklMMbM"
            },
            {
                name: "The Carolina Chocolate Drops",
                origin: "Durham, North Carolina",
                single: "Snowden's Jig",
                genre: "old-time string / bluegrass / negro spiritual & folk fusion",
                themes: "bringing attention to black string and folk artists",
                video: "https://www.youtube.com/watch?v=nliiRDmBbEQ"
            },
            {
                name: "Tyler Childers",
                origin: "Lawrence County, Kentucky",
                single: "Lady May",
                genre: "neotraditional country/folk/bluegrass",
                themes: "addication / openly discussing progressive political views / Black Lives Matter",
                video: "https://www.youtube.com/watch?v=QQ3_AJ5Ysx0"
            },
            {
                name: "Gangstagrass",
                origin: "Brooklyn, New York",
                single: "Long Hard Times to Come",
                genre: "bluegrass / rap / 'hee-haw hip-hop'",
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
