const { getAllMovies,getMovies } = require("../services/getMovies.service");

const getAllMoviesData= async (req, res) => {
    try {
      const movie = await getAllMovies();
      // console.log(user);
      res.send(movie);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const getMovieData= async (req, res) => {
    try {
      const movie = await getMovies(req.query.title);
      // console.log(user);
      res.send(movie);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
module.exports = {
  getAllMoviesData,
  getMovieData
  };
  