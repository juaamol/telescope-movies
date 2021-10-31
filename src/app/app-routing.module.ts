import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'single-movie/:movieId',
    loadChildren: () =>
      import('./single-movie/single-movie.module').then(
        (m) => m.SingleMovieModule
      ),
  },
  { path: 'movies-list/:genre', loadChildren: () => import('./movies-list/movies-list.module').then(m => m.MoviesListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
