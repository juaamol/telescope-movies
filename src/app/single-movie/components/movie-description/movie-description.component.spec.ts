import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDescriptionComponent } from './movie-description.component';

describe('MovieDescriptionComponent', () => {
  let component: MovieDescriptionComponent;
  let fixture: ComponentFixture<MovieDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDescriptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the description', () => {
    const description = 'example'
    component.description = description;
    fixture.detectChanges();

    const keywordElement = fixture.nativeElement.querySelector('.description');
    expect(keywordElement.textContent).toMatch(description);
  });

  it('should display the given keywords', () => {
    const mockKeywords = [
      { id: 0, keyword: '0' },
      { id: 1, keyword: '1' },
    ];
    component.keywords = mockKeywords;
    fixture.detectChanges();

    const keywordElements = fixture.nativeElement.querySelectorAll('.keyword');
    expect(keywordElements.length).toBe(mockKeywords.length);
  });
});
