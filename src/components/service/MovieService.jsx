import axios from 'axios';

const API_KEY = 'd36c76811afe64ae46b83ec8fd55864b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrending = async () => {
  const { data } = await axios.get(`trending/all/day?`);
  return data.results;
};

export const getSearches = async params => {
  const { data } = await axios.get(`search/movie?query=${params}&page=1`);
  return data;
};

export const getDetails = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}`);
  return data;
};

export const getCast = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/credits`);
  return data;
};

export const getReviews = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/reviews?page=1`);
  return data;
};
