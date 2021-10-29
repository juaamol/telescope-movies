import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SingleMovieRoutingModule } from './single-movie-routing.module';
import { SingleMovieComponent } from './single-movie.component';


@NgModule({
  declarations: [
    SingleMovieComponent
  ],
  imports: [
    CommonModule,
    SingleMovieRoutingModule,
    HttpClientModule,
  ]
})
export class SingleMovieModule { }
