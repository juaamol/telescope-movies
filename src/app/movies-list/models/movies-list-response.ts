import { MovieEto } from './movie-eto';

export interface MoviesListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: MovieEto[];
}
