import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { ApiAuthenticationInterceptor } from '../shared/interceptors/api-authentication/api-authentication.interceptor';
import { SharedModule } from '../shared/shared.module';
import { GenresRoutingModule } from './genres-routing.module';
import { GenresComponent } from './genres.component';
import { GenresService } from './services/genres/genres.service';


@NgModule({
  declarations: [GenresComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    GenresRoutingModule,
    MatProgressSpinnerModule,
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
    GenresService,
  ],
})
export class GenresModule {}
