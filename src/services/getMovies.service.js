// Import any required models here
const {MovieDataModel} = require('../models');

// Define your service methods
const getMovies = async () => {
  try {
    console.log('Get user function is working')
    return await  UserDataModel.find();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
module.exports = {
    getMovies
  };