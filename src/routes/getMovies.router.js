const express = require('express');
const router = express.Router();
const { getAllMoviesData } = require('../controllers/getMovies.controller');
// Define your routes
router.route('/api/movies').get(getAllMoviesData);

// Add more routes as needed

module.exports = router;