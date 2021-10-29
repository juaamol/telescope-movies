import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from 'src/environments/environment';

@Injectable()
export class ApiAuthenticationInterceptor implements HttpInterceptor {
  constructor() {}

  /**
   * Adds the required api headers to every request
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authenticationHeaders = request.headers
      .append('x-rapidapi-key', api.key)
      .append('x-rapidapi-host', api.host);
    const clonedRequest = request.clone({ headers: authenticationHeaders });

    return next.handle(clonedRequest);
  }
}
