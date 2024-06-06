const { getMovies } = require("../services/getMovies.service");

const getMoviesData= async (req, res) => {
    try {
      const user = await getMovies();
      // console.log(user);
      res.send(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  
module.exports = {
    getMoviesData
  };
  