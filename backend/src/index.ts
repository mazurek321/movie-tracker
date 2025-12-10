import express = require("express");
import cors  = require("cors");
import dotenv = require("dotenv");
import axios = require("axios");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const TMDB_API_KEY = process.env.TMDB_API_KEY;

app.get("/movies", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );

    const movies = response.data.results.map((m: any) => ({
      id: m.id,
      title: m.title,
      genre_ids: m.genre_ids,
      rating: m.vote_average,
      release_date: m.release_date,
      poster_path: m.poster_path 
    }));

    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send("Błąd pobierania filmów z TMDb");
  }
});

app.get("/movies/search", async (req, res) => {
  const query = req.query.query as string;
  if (!query) return res.status(400).send("Brak zapytania");

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`
    );

    const movies = response.data.results.map((m: any) => ({
      id: m.id,
      title: m.title,
      genre_ids: m.genre_ids,
      rating: m.vote_average,
      release_date: m.release_date,
      poster_path: m.poster_path 
    }));

    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send("Błąd wyszukiwania filmów");
  }
});

app.listen(3001, () => console.log("Backend running on port 3001"));
