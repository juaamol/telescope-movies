import { MoviesPage } from '../../models/movie-page';
import { MoviesListResponse } from '../../models/movies-list-response';
import { responseToPage } from './response-to-page';

describe('Utils for MoviesListModule', () => {
  it('shoud transform a response into a page', () => {
    const mockMoviesListResponse: MoviesListResponse = {
      count: 100,
      next: 'https://example/?page=3',
      previous: 'https://example/?page=1',
      results: [{ imdb_id: '0', title: 'example' }],
    };
    const expectedMoviesPage: MoviesPage = {
      count: 100,
      next: 3,
      previous: 1,
      movies: [{ imdbId: '0', title: 'example' }],
    };
    const page = responseToPage(mockMoviesListResponse);

    expect(page.count).toBe(expectedMoviesPage.count);
    expect(page.next).toBe(expectedMoviesPage.next);
    expect(page.previous).toBe(expectedMoviesPage.previous);
    expect(page.movies).toEqual(expectedMoviesPage.movies);
  });
});
