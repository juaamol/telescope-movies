import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { GenresService } from './genres.service';

describe('GenresService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let genresService: GenresService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GenresService],
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    genresService = new GenresService(httpClientSpy as any);
  });

  it('should be created', () => {
    const genresService = TestBed.inject(GenresService);
    expect(genresService).toBeTruthy();
  });

  it('should return the expected genres (HttpClient called once)', (done: DoneFn) => {
    const genresResponse = { results: [{ genre: 'Adventure' }] };
    const expectedGenres = ['Adventure'];

    httpClientSpy.get.and.returnValue(of(genresResponse));

    genresService.getGenres().subscribe((genres) => {
      expect(genres).toEqual(expectedGenres);
      done();
    }, done.fail);

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});
