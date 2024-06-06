const { getMovies } = require("../services/getMovies.service");

const getAllMoviesData= async (req, res) => {
    try {
      const movie = await getMovies();
      // console.log(user);
      res.send(movie);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  
module.exports = {
  getAllMoviesData
  };
  