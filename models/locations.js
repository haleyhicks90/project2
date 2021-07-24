////////////////
//Dependencies
///////////////
const mongoose = require('mongoose')

//Location Schema
const locationSchema = new mongoose.Schema ({
    region: String,
    island: String,
    season: String,
    visited: Boolean,
    rating: Number
})

//collection = Location
const Location: mongoose.model('Location', locationSchema)
