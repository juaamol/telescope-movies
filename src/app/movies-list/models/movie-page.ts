import { Movie } from './movie';

export interface MoviesPage {
  count: number;
  next: number | null;
  previous: number | null;
  movies: Movie[];
}
