// Import any required models here
const MovieDataModel = require('../model/movie.model');

// Define your service methods
const getMovies = async () => {
  try {
    console.log('Get user function is working')
    return await MovieDataModel.find();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
module.exports = {
  getMovies
};