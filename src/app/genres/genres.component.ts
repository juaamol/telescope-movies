import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GenresService } from './services/genres/genres.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  isLoading = true;
  hasError = false;
  genres: string[] = [];

  constructor(private genresService: GenresService) {}

  ngOnInit(): void {
    this.getGenres().subscribe(
      (genres) => (this.genres = genres),
      () => {
        this.hasError = true;
        this.isLoading = false;
        this.genres = [];
      },
      () => (this.isLoading = false)
    );
  }

  private getGenres(): Observable<string[]> {
    return this.genresService.getGenres();
  }
}
