import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'genres',
    pathMatch: 'full',
  },
  {
    path: 'single-movie/:movieId',
    loadChildren: () =>
      import('./single-movie/single-movie.module').then(
        (m) => m.SingleMovieModule
      ),
  },
  {
    path: 'movies-list/:genre',
    loadChildren: () =>
      import('./movies-list/movies-list.module').then(
        (m) => m.MoviesListModule
      ),
  },
  {
    path: 'genres',
    loadChildren: () =>
      import('./genres/genres.module').then((m) => m.GenresModule),
  },
  {
    path: '**',
    redirectTo: 'genres',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
