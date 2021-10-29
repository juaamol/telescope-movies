import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { api } from '../../environments/environment';
import { ApiAuthenticationInterceptor } from './api-authentication.interceptor';
import { AppModule } from '../app.module';

describe('ApiAuthenticationInterceptor', () => {
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AppModule],
      providers: [
        ApiAuthenticationInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiAuthenticationInterceptor,
          multi: true,
        },
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const interceptor = TestBed.inject(ApiAuthenticationInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should set "x-rapidapi-key" and "x-rapidapi-host" headers with configured values', () => {
    const sampleUrl = `${api.url}/genres/`;

    httpClient.get<string>(sampleUrl).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(sampleUrl);

    expect(httpRequest.request.headers.get('x-rapidapi-key')).toEqual(api.key);
    expect(httpRequest.request.headers.get('x-rapidapi-host')).toEqual(
      api.host
    );
  });
});
