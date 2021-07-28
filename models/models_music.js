////////////////
//Dependencies
///////////////
const mongoose = require('mongoose')

//Location Schema
const musicSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    origin: String,
    single: String,
    genre: String,
    themes: String,
    video: String
})

//collection = Band (bands)
const Band = mongoose.model('Band', musicSchema)


module.exports = Band;
