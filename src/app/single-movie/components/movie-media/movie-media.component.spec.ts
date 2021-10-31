import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMediaComponent } from './movie-media.component';
import { SharedModule } from '../../../shared/shared.module';

describe('MovieMediaComponent', () => {
  let component: MovieMediaComponent;
  let fixture: ComponentFixture<MovieMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieMediaComponent],
      imports: [SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
