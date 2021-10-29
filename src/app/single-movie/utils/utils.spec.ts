import { MovieEto } from '../models/movie-eto';
import { etoToMovie } from './utils';

describe('Utils for SingleMovieModule', () => {
  let mockMovieEto: MovieEto = {
    imdb_id: 'string',
    title: 'string',
    year: 2021,
    popularity: 0,
    description: 'string',
    content_rating: 'string',
    movie_length: 0,
    rating: 0,
    created_at: '12/12/21',
    trailer: 'string',
    image_url: 'string',
    release: '12/12/2021',
    plot: 'string',
    banner: 'string',
    type: 'string',
    gen: [],
    keywords: [],
  };

  it('should be keep the same values after transforming MovieEto to Movie', () => {
    const movie = etoToMovie(mockMovieEto);

    expect(mockMovieEto.imdb_id).toEqual(movie.imdbId);
    expect(mockMovieEto.title).toEqual(movie.title);
    expect(mockMovieEto.year).toEqual(movie.year);
    expect(mockMovieEto.popularity).toEqual(movie.popularity);
    expect(mockMovieEto.description).toEqual(movie.description);
    expect(mockMovieEto.content_rating).toEqual(movie.contentRating);
    expect(mockMovieEto.movie_length).toEqual(movie.movieLength);
    expect(mockMovieEto.rating).toEqual(movie.rating);
    expect(new Date(mockMovieEto.created_at)).toEqual(movie.createdAt);
    expect(mockMovieEto.trailer).toEqual(movie.trailer);
    expect(mockMovieEto.image_url).toEqual(movie.imageUrl);
    expect(new Date(mockMovieEto.release)).toEqual(movie.release);
    expect(mockMovieEto.plot).toEqual(movie.plot);
    expect(mockMovieEto.banner).toEqual(movie.banner);
    expect(mockMovieEto.type).toEqual(movie.type);
    expect(mockMovieEto.gen).toEqual(movie.gen);
    expect(mockMovieEto.keywords).toEqual(movie.keywords);
  });
});
