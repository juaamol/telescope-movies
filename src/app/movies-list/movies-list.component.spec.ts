import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { MoviesPage } from './models/movie-page';
import { MoviesListComponent } from './movies-list.component';
import { MoviesListService } from './services/movies-list/movies-list.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { EventEmitter } from '@angular/core';

const mockMoviesPage = {
  count: 100,
  next: 3,
  previous: 1,
  movies: [{ imdbId: '0', title: 'example' }],
};

class MockMoviesListService {
  getMovies(): Observable<MoviesPage> {
    return of(mockMoviesPage);
  }
}

class MockActivatedRoute {
  paramMap = of({ get: () => 'Adventure' });
}

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesListComponent],
      providers: [
        { provide: MoviesListService, useClass: MockMoviesListService },
        {
          provide: ActivatedRoute,
          useClass: MockActivatedRoute,
        },
      ],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    component.paginator = {
      page: new EventEmitter<PageEvent>(),
      pageIndex: 0,
      firstPage: () => {},
    } as any;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the page initially', fakeAsync(() => {
    component.ngAfterViewInit();
    tick();
    expect(component.movies).toEqual(mockMoviesPage.movies);
    expect(component.isLoading).toBe(false);
  }));

  it('should not set the page after an error', fakeAsync(() => {
    const moviesListService = TestBed.inject(MoviesListService);
    spyOn(moviesListService, 'getMovies').and.returnValue(
      throwError('An error has ocurred')
    );

    component.ngAfterViewInit();
    tick();
    expect(component.movies).toEqual([]);
    expect(component.isLoading).toBe(false);
  }));

  it('should display the spinner', () => {
    component.isLoading = true;
    fixture.detectChanges();

    const spinnerElements =
      fixture.nativeElement.querySelectorAll('mat-spinner');
    expect(spinnerElements.length).toBe(1);
  });
});
