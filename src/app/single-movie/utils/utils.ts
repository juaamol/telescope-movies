import { MovieEto } from '../models/movie-eto';
import { Movie } from '../models/movie';

export function etoToMovie(movieEto: MovieEto) {
  const movie: Movie = {
    imdbId: movieEto.imdb_id,
    title: movieEto.title,
    year: movieEto.year,
    popularity: movieEto.popularity,
    description: movieEto.description,
    contentRating: movieEto.content_rating,
    movieLength: movieEto.movie_length,
    rating: movieEto.rating,
    createdAt: new Date(movieEto.created_at),
    trailer: movieEto.trailer,
    imageUrl: movieEto.image_url,
    release: new Date(movieEto.release),
    plot: movieEto.plot,
    banner: movieEto.banner,
    type: movieEto.type,
    gen: movieEto.gen,
    keywords: movieEto.keywords,
  };

  return movie;
}
