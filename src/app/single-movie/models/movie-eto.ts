import { Genre } from './genre';
import { Keyword } from './keyword';

export interface MovieEto {
  imdb_id: string;
  title: string;
  year: number;
  popularity: number;
  description: string;
  content_rating: string;
  movie_length: number;
  rating: number;
  created_at: string;
  trailer: string;
  image_url: string;
  release: string;
  plot: string;
  banner: string;
  type: string;
  gen: Genre[];
  keywords: Keyword[];
}
