import React, { useEffect, useState } from "react";
import type { Movie } from "../interfaces/Movie";
import { useMovies } from "../hooks/useMovies";
import { MovieItem } from "./MovieItem";
import "./MovieList.css"; 

export const MovieList = () => {
  const [query, setQuery] = useState("");
  const { movies, loading, loadMovies, search } = useMovies();

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
          {movies.map((m) => <MovieItem key={m.id} movie={m} />)}
        </ul>
      )}
    </div>
  );
};
