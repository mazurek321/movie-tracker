import React, { useEffect, useState } from "react";
import type { Movie } from "../interfaces/Movie";
import { useMovies } from "../hooks/useMovies";
import { MovieItem } from "./MovieItem";
import { MovieModal } from "./MovieModal";
import "./MovieList.css"; 

export const MovieList = () => {
  const [query, setQuery] = useState("");
  const { movies, loading, loadMovies, search } = useMovies();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => { loadMovies(); }, [loadMovies]);

  return (
    <div className="movie-container">
      <h1 className="title">Movie Tracker</h1>

      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="search-input"
        />
        <button onClick={() => search(query)} className="search-button">
          Search
        </button>
      </div>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <ul className="movie-list">
          {movies.map((m) => (
            <li key={m.id} onClick={() => setSelectedMovie(m)}>
              <MovieItem movie={m} />
            </li>
          ))}
        </ul>
      )}

      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
};
