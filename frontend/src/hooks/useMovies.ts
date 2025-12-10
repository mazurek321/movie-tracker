import { useState, useCallback } from "react";
import type { Movie } from "../interfaces/Movie";
import { fetchMovies, searchMovies } from "../api/movieApi";

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMovies = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchMovies();
      setMovies(data);
    } finally {
      setLoading(false);
    }
  }, []);

  const search = useCallback(async (query: string) => {
    setLoading(true);
    try {
      const data = await searchMovies(query);
      setMovies(data);
    } finally {
      setLoading(false);
    }
  }, []);

  return { movies, loading, loadMovies, search };
};