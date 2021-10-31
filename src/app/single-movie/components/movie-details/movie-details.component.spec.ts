import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../../shared/shared.module';
import { MovieDetailsComponent } from './movie-details.component';
import { TranslateModule } from '@ngx-translate/core';


const mockMovie = {
  imdbId: 'string',
  title: 'string',
  year: 2021,
  popularity: 0,
  description: 'string',
  contentRating: 'string',
  movieLength: 0,
  rating: 0,
  createdAt: new Date('12/12/21'),
  trailer: 'string',
  imageUrl: 'string',
  release: new Date('12/12/2021'),
  plot: 'string',
  banner: 'string',
  type: 'string',
  gen: [
    { id: 0, genre: '0' },
    { id: 1, genre: '1' },
  ],
  keywords: [],
};

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent],
      imports: [SharedModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the plot', () => {
    component.movie = mockMovie;
    fixture.detectChanges();

    const plotElement = fixture.nativeElement.querySelector('.plot');
    expect(plotElement.textContent).toMatch(mockMovie.plot);
  });

  it('should display the given genres', () => {
    component.movie = mockMovie;
    fixture.detectChanges();

    const genresElements = fixture.nativeElement.querySelectorAll('.genre');
    expect(genresElements.length).toBe(mockMovie.gen.length);
  });
});
