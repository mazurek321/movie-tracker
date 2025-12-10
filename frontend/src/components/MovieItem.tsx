import type { Movie } from "../interfaces/Movie";
import "./MovieList.css"; 

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

export const MovieItem = ({ movie }: { movie: Movie }) => (
  <li className="movie-card">
    {movie.poster_path && (
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />
    )}
    <div className="movie-info">
      <h2 className="movie-title">{movie.title}</h2>
      <p>Rating: {movie.rating}</p>
      <p>Release: {movie.release_date}</p>
    </div>
  </li>
);
