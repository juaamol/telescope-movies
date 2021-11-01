import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { GenresComponent } from './genres.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { GenresService } from './services/genres/genres.service';

const mockGenres = ['Adventure'];

class MockGenresService {
  getGenres(): Observable<string[]> {
    return of(mockGenres);
  }
}

describe('GenresComponent', () => {
  let component: GenresComponent;
  let fixture: ComponentFixture<GenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenresComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [{ provide: GenresService, useClass: MockGenresService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the genres', fakeAsync(() => {
    component.ngOnInit();
    tick();
    expect(component.genres).toEqual(mockGenres);
  }));

  it('should display the given genres', () => {
    component.genres = mockGenres;
    fixture.detectChanges();

    const genreElements = fixture.nativeElement.querySelectorAll('.genre');
    expect(genreElements.length).toBe(mockGenres.length);
  });

  it('should display the spinner', () => {
    component.isLoading = true;
    fixture.detectChanges();

    const spinnerElements = fixture.nativeElement.querySelectorAll('mat-spinner');
    expect(spinnerElements.length).toBe(1);
  });

  it('should display the error', () => {
    component.hasError = true;
    fixture.detectChanges();

    const errorElements = fixture.nativeElement.querySelectorAll('.error');
    expect(errorElements.length).toBe(1);
  });
});
