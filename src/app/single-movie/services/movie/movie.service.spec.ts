import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MovieEto } from '../../models/movie-eto';
import { etoToMovie } from '../../utils/utils';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let movieService: MovieService;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    movieService = new MovieService(httpClientSpy as any);
  });

  it('should be created', () => {
    const movieService = TestBed.inject(MovieService);
    expect(movieService).toBeTruthy();
  });

  it('should return expected movie (HttpClient called once)', (done: DoneFn) => {
    const movieEto = mockMovieEto;
    const movieResponse = { results: mockMovieEto };
    const expectedMovie = etoToMovie(movieEto);

    httpClientSpy.get.and.returnValue(of(movieResponse));

    movieService.getMovieDetails(mockMovieEto.imdb_id).subscribe((movie) => {
      expect(movie).toEqual(expectedMovie);
      done();
    }, done.fail);

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});
