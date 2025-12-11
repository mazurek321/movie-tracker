import React from "react";
import type { Movie } from "../interfaces/Movie";
import "./MovieModal.css";

interface MovieModalProps {
  movie: Movie | null;
  onClose: () => void;
}

export const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <h2>{movie.title}</h2>
        <p>Rating: {movie.rating}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Genres: {movie.genre_ids.join(", ")}</p>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="modal-poster"
          />
        )}
      </div>
    </div>
  );
};
