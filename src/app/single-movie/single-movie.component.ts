import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Movie } from './models/movie';
import { MovieService } from './services/movie/movie.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss'],
})
export class SingleMovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  isLoading = true;
  private movieSubscription: Subscription | undefined;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movieSubscription = this.getMovie().subscribe(
      (movie) => (this.movie = movie)
    );
  }

  ngOnDestroy(): void {
    this.movieSubscription?.unsubscribe();
  }

  private getMovie(): Observable<Movie | null> {
    return this.route.paramMap.pipe(
      tap(() => {
        this.isLoading = true;
      }),
      map((params) => params.get('movieId') ?? ''),
      switchMap((movieId) => this.movieService.getMovieDetails(movieId)),
      tap(() => (this.isLoading = false)),
      catchError(() => {
        this.isLoading = false
        return of(null);
      })
    );
  }
}
