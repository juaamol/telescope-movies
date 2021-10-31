import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../shared/shared.module';
import { MovieMediaComponent } from './movie-media.component';


describe('MovieMediaComponent', () => {
  let component: MovieMediaComponent;
  let fixture: ComponentFixture<MovieMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieMediaComponent],
      imports: [
        SharedModule,
        TranslateModule.forRoot()
      ],
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
