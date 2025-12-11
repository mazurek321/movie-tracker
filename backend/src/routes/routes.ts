import { Router, Request, Response } from "express";
import { getPopularMovies, searchMovies } from "../tmdb";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const movies = await getPopularMovies();
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).send("Błąd pobierania filmów z TMDb");
  }
});

router.get("/search", async (req: Request, res: Response) => {
  const query = req.query.query as string;
  if (!query) return res.status(400).send("Brak zapytania");

  try {
    const movies = await searchMovies(query);
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).send("Błąd wyszukiwania filmów");
  }
});

export default router;
