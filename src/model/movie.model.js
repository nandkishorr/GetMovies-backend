const mongoose = require('mongoose');
const moviedataSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    banner_image:{
        type: String,
        required: true
    }
    
});

const MovieDataModel = mongoose.model('movie', moviedataSchema);
module.exports = MovieDataModel;