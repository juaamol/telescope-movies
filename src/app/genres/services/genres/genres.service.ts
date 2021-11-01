import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { api } from 'src/environments/environment';
import { GenresResponse } from '../../models/genres-response';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Gets the different movie genres
   */
  getGenres(): Observable<string[]> {
    return this.httpClient.get<GenresResponse>(this.getGenresUrl()).pipe(
      map((response) => response.results),
      map((genres) => genres.map((genre) => genre.genre))
    );
  }

  private getGenresUrl(): string {
    return `${api.url}/genres/`;
  }
}
