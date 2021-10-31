import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { Movie } from './models/movie';
import { MovieService } from './services/movie/movie.service';
import { SingleMovieComponent } from './single-movie.component';
import { TranslateModule } from '@ngx-translate/core';


const mockMovie = {
  imdbId: 'string',
  title: 'string',
  year: 2021,
  popularity: 0,
  description: 'string',
  contentRating: 'string',
  movieLength: 0,
  rating: 0,
  createdAt: new Date('12/12/21'),
  trailer: 'string',
  imageUrl: 'string',
  release: new Date('12/12/2021'),
  plot: 'string',
  banner: 'string',
  type: 'string',
  gen: [],
  keywords: [],
};

class MockMovieService {
  getMovieDetails(): Observable<Movie> {
    return of(mockMovie);
  }
}

class MockActivatedRoute {
  paramMap = of({ get: () => mockMovie.imdbId });
}

describe('SingleMovieComponent', () => {
  let component: SingleMovieComponent;
  let fixture: ComponentFixture<SingleMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleMovieComponent],
      providers: [
        { provide: MovieService, useClass: MockMovieService },
        {
          provide: ActivatedRoute,
          useClass: MockActivatedRoute,
        },
      ],
      imports: [TranslateModule.forRoot()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the movie initially', fakeAsync(() => {
    component.ngOnInit();
    tick();
    expect(component.movie).toEqual(mockMovie);
  }));

  it('should finish loading without errors', fakeAsync(() => {
    component.ngOnInit();
    tick();
    expect(component.isLoading).toBe(false);
  }));

  it('should not set the movie after an error', fakeAsync(() => {
    const movieService = TestBed.inject(MovieService);
    spyOn(movieService, 'getMovieDetails').and.returnValue(
      throwError('An error has ocurred')
    );

    component.ngOnInit();
    tick();
    expect(component.movie).toBeNull();
  }));

  it('should finish loading with errors', fakeAsync(() => {
    const movieService = TestBed.inject(MovieService);
    spyOn(movieService, 'getMovieDetails').and.returnValue(
      throwError('An error has ocurred')
    );

    component.ngOnInit();
    tick();
    expect(component.isLoading).toBe(false);
  }));

  it('should display the spinner', () => {
    component.isLoading = true;
    fixture.detectChanges();

    const spinnerElements = fixture.nativeElement.querySelectorAll('mat-spinner');
    expect(spinnerElements.length).toBe(1);
  });

  it('should display an error when there is no movie', () => {
    component.movie = null;
    fixture.detectChanges();

    const spinnerElements = fixture.nativeElement.querySelectorAll('.error');
    expect(spinnerElements.length).toBe(1);
  });
});
