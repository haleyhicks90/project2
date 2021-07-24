////////////////
//Dependencies
///////////////
const mongoose = require('mongoose')

//Location Schema
const locationSchema = new mongoose.Schema ({
    regionMaori: String,
    regionEnglish: String,
    island: String,
    img: String,
    season: String,
    activities: ['String', 'String'],
    visited: Boolean,
    rating: Number
})

//collection = Location
const Location: mongoose.model('Location', locationSchema)
