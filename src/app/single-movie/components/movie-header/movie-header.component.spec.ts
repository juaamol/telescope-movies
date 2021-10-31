import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHeaderComponent } from './movie-header.component';

describe('MovieHeaderComponent', () => {
  let component: MovieHeaderComponent;
  let fixture: ComponentFixture<MovieHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the given title', () => {
    const title = 'example';

    component.title = title;
    fixture.detectChanges();

    const titleElementText = fixture.nativeElement
      .querySelector('.title')
      .textContent.trim();

    expect(title).toMatch(titleElementText);
  });

  it('should display the given metadata', () => {
    const metadata = 'example';

    component.metadata = metadata;
    fixture.detectChanges();

    const pElementText = fixture.nativeElement
      .querySelector('p')
      .textContent.trim();

    expect(metadata).toMatch(pElementText);
  });
});
