import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { api } from 'src/environments/environment';
import { MoviesPage } from '../../models/movie-page';
import { MoviesListResponse } from '../../models/movies-list-response';
import { responseToPage } from '../../utils/response-to-page/response-to-page';

@Injectable({
  providedIn: 'root',
})
export class MoviesListService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Gets a list of movies
   *
   * @param genre the genre of the movies to find
   * @param page the slice of the movies to get
   */
  getMovies(genre: string, page: number): Observable<MoviesPage> {
    const params = this.httpParams(page);
    return this.httpClient
      .get<MoviesListResponse>(this.getMoviesUrl(genre), { params })
      .pipe(map((response) => responseToPage(response)));
  }

  private getMoviesUrl(genre: string): string {
    return `${api.url}/movie/byGen/${genre}/`;
  }

  private httpParams(page: number): HttpParams {
    return new HttpParams().set('page', page);
  }
}
