import { MoviesPage } from '../../models/movie-page';
import { MoviesListResponse } from '../../models/movies-list-response';
import { MovieEto } from '../../models/movie-eto';
import { Movie } from '../../models/movie';

export function responseToPage(response: MoviesListResponse): MoviesPage {
  return {
    count: response.count,
    next: getPage(response.next ?? ''),
    previous: getPage(response.previous ?? ''),
    movies: (response.results ?? []).map((eto) => etoToMovie(eto)),
  };
}

function getPage(pageUrl: string): number | null {
  const [, paramString] = pageUrl.split('?');
  const urlSearchParams = new URLSearchParams(paramString);
  const page = urlSearchParams.get('page');

  return page ? +page : null;
}

export function etoToMovie(eto: MovieEto): Movie {
  return {
    imdbId: eto.imdb_id,
    title: eto.title,
  };
}
