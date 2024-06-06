// Import any required models here
const MovieDataModel = require('../model/movie.model');

// Define your service methods
const getAllMovies = async () => {
  try {
    console.log('Get user function is working')
    return await MovieDataModel.find();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
const getMovies = async (title) => {
  try {
    console.log('Get movies function is working');
    
    if (title.trim() === "") {
      // If title is empty or contains only whitespace, return an empty array
      return [];
    }

    // Perform search only if title is provided
    return await MovieDataModel.find({ title: { $regex: `^${title}`, $options: 'i' } });
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

module.exports = {
  getAllMovies,
  getMovies
};