import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, from, Observable, of, Subscription } from 'rxjs';
import { catchError, map, startWith, switchMap, tap } from 'rxjs/operators';
import { Movie } from './models/movie';
import { MoviesPage } from './models/movie-page';
import { MoviesListService } from './services/movies-list/movies-list.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['title'];
  movies: Movie[] = [];
  resultsLength = 0;
  genre = '';
  isLoading = true;

  private moviesPageSubscription: Subscription | undefined;
  readonly pageSize = 50;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private moviesListService: MoviesListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.moviesPageSubscription?.unsubscribe();
  }

  ngAfterViewInit() {
    if (!this.paginator) return;

    this.moviesPageSubscription = this.changePage().subscribe(
      (movies) => (this.movies = movies)
    );
  }

  private changePage(): Observable<Movie[]> {
    const movieParams = this.getMoviesParams();

    return movieParams.pipe(
      switchMap((genre) => {
        this.isLoading = true;
        return this.getMovies(genre);
      }),
      map((movies) => {
        this.isLoading = false;

        if (movies === null) {
          return [];
        }

        this.resultsLength = movies.count;
        return movies.movies;
      })
    );
  }

  private getMoviesParams(): Observable<string> {
    const pageUpdate = from(this.paginator.page).pipe(startWith({}));

    return combineLatest([this.genreUpdate(), pageUpdate]).pipe(
      map(([genre]) => genre)
    );
  }

  private genreUpdate(): Observable<string> {
    return this.route.paramMap.pipe(
      map((params) => params.get('genre') ?? ''),
      tap(() => this.paginator.firstPage())
    );
  }

  private getMovies(genre: string): Observable<MoviesPage | null> {
    return this.moviesListService
      .getMovies(genre, this.paginator.pageIndex + 1)
      .pipe(catchError(() => of(null)));
  }
}
