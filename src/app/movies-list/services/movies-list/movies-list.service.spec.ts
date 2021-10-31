import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MoviesListResponse } from '../../models/movies-list-response';
import { responseToPage } from '../../utils/response-to-page/response-to-page';
import { MoviesListService } from './movies-list.service';


describe('MoviesListService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let moviesListService: MoviesListService;
  let mockMoviesListResponse: MoviesListResponse = {
    count: 100,
    next: 'https://example/?page=3',
    previous: 'https://example/?page=1',
    results: [{ imdb_id: '0', title: 'example' }],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesListService],
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    moviesListService = new MoviesListService(httpClientSpy as any);
  });

  it('should be created', () => {
    const moviesListService = TestBed.inject(MoviesListService);
    expect(moviesListService).toBeTruthy();
  });

  it('should return the expected page of movies (HttpClient called once)', (done: DoneFn) => {
    const moviesListResponse = mockMoviesListResponse;
    const expectedPage = responseToPage(moviesListResponse);

    httpClientSpy.get.and.returnValue(of(moviesListResponse));

    moviesListService
      .getMovies('Adventure', 2)
      .subscribe((page) => {
        expect(page).toEqual(expectedPage);
        done();
      }, done.fail);

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});
