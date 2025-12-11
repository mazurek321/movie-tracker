export interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  rating: number;
  release_date: string;
  poster_path: string | null;
}