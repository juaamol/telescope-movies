import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { ApiAuthenticationInterceptor } from '../shared/interceptors/api-authentication/api-authentication.interceptor';
import { SharedModule } from '../shared/shared.module';
import { MoviesListRoutingModule } from './movies-list-routing.module';
import { MoviesListComponent } from './movies-list.component';
import { MoviesListService } from './services/movies-list/movies-list.service';


@NgModule({
  declarations: [
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    MoviesListRoutingModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
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
    MoviesListService
  ]
})
export class MoviesListModule { }
