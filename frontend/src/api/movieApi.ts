import axios from "axios";
import type { Movie } from "../interfaces/Movie";

const BASE_URL = "http://localhost:3001";

export const fetchMovies = async (): Promise<Movie[]> => {
  const res = await axios.get(`${BASE_URL}/movies`);
  return res.data;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  if (!query) return fetchMovies();
  const res = await axios.get(`${BASE_URL}/movies/search?query=${query}`);
  return res.data;
};
