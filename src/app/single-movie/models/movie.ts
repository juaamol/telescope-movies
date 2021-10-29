import { Genre } from './genre';
import { Keyword } from './keyword';

export interface Movie {
  imdbId: string;
  title: string;
  year: number;
  popularity: number;
  description: string;
  contentRating: string;
  movieLength: number;
  rating: number;
  createdAt: Date;
  trailer: string;
  imageUrl: string;
  release: Date;
  plot: string;
  banner: string;
  type: string;
  gen: Genre[];
  keywords: Keyword[];
}
