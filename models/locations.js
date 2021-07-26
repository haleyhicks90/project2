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
    activities: String,
    visited: Boolean,
    rating: Number
})

//collection = Location
const Location = mongoose.model('Location', locationSchema)


module.exports = Location;
