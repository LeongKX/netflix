const Tvshow = require("../models/tvshow");

const getTvshows = async (genre, rating, premiere_year) => {
  //create a container for filter
  let filter = {};
  // if genre exists, pass it to the filter container
  if (genre) {
    filter.genre = genre;
  }
  // if rating exist, pass it into the filter container
  if (rating) {
    filter.rating = { $gt: rating };
  }
  // if premiere_year exist, pass into the filter container
  if (premiere_year) {
    filter.premiere_year = { $gt: premiere_year };
  }
  //apply filter in .find
  const tvshows = await Tvshow.find(filter);
  return tvshows;
};

//get one tvshow
const getTvshow = async (id) => {
  const tvshow = await Tvshow.findById(id);
  return tvshow;
};

//add new tvshow
const addNewTvshow = async (
  title,
  creator,
  premiere_year,
  end_year,
  seasons,
  genre,
  rating
) => {
  const newTvshow = new Tvshow({
    title,
    creator,
    premiere_year,
    end_year,
    seasons,
    genre,
    rating,
  });
  await newTvshow.save();
  return newTvshow;
};

//update tvshow
const updateTvshow = async (
  id,
  title,
  creator,
  premiere_year,
  end_year,
  seasons,
  genre,
  rating
) => {
  const updateTvshow = await Tvshow.findByIdAndUpdate(
    id,
    {
      title,
      creator,
      premiere_year,
      end_year,
      seasons,
      genre,
      rating,
    },
    {
      new: true,
    }
  );
  return updateTvshow;
};

//delete tvshow
const deleteTvshow = async (id) => {
  return await Tvshow.findByIdAndDelete(id);
};

module.exports = {
  getTvshows,
  getTvshow,
  addNewTvshow,
  updateTvshow,
  deleteTvshow,
};
