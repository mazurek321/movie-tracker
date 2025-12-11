import axios from "axios";
import { TMDB_API_KEY } from "./config";
import { Movie } from "./interfaces/interface";

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
    params: { api_key: TMDB_API_KEY, language: "en-US", page: 1 },
  });

  return response.data.results.map((m: any) => ({
    id: m.id,
    title: m.title,
    genre_ids: m.genre_ids,
    rating: m.vote_average,
    release_date: m.release_date,
    poster_path: m.poster_path,
  }));
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
    params: { api_key: TMDB_API_KEY, query },
  });

  return response.data.results.map((m: any) => ({
    id: m.id,
    title: m.title,
    genre_ids: m.genre_ids,
    rating: m.vote_average,
    release_date: m.release_date,
    poster_path: m.poster_path,
  }));
};
