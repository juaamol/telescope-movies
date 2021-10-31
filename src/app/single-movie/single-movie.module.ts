import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ApiAuthenticationInterceptor } from '../shared/interceptors/api-authentication/api-authentication.interceptor';
import { SharedModule } from '../shared/shared.module';
import { MovieDescriptionComponent } from './components/movie-description/movie-description.component';
import { MovieHeaderComponent } from './components/movie-header/movie-header.component';
import { MovieMediaComponent } from './components/movie-media/movie-media.component';
import { MovieService } from './services/movie/movie.service';
import { SingleMovieRoutingModule } from './single-movie-routing.module';
import { SingleMovieComponent } from './single-movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SingleMovieComponent,
    MovieMediaComponent,
    MovieDescriptionComponent,
    MovieHeaderComponent,
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    SingleMovieRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
    MatTooltipModule,
    SharedModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiAuthenticationInterceptor,
      multi: true,
    },
    MovieService,
  ],
  exports: [SingleMovieComponent],
})
export class SingleMovieModule {}
