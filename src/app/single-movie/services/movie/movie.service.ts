import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { api } from 'src/environments/environment';
import { Movie } from '../../models/movie';
import { MovieEto } from '../../models/movie-eto';
import { etoToMovie } from '../../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  constructor(private httpClient: HttpClient) {}

  /**
   * Gets the details of a movie
   * 
   * @param movieId the id of the movie to be retrieved
   */
  getMovieDetails(movieId: string): Observable<Movie> {
    return this.httpClient
      .get<MovieEto>(this.getMovieDetailsUrl(movieId))
      .pipe(map((movieEto) => etoToMovie(movieEto)));
  }

  private getMovieDetailsUrl(movieId: string): string {
    return `${api.url}/movie/id/${movieId}/`;
  }
}
