const express = require('express');
const router = express.Router();
const { getAllMoviesData,getMovieData } = require('../controllers/getMovies.controller');
// Define your routes
router.route('/api/movies').get(getAllMoviesData);
router.route('/api/movies/search').get(getMovieData);

// Add more routes as needed

module.exports = router;