import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLabelComponent } from './icon-label.component';

describe('IconLabelComponent', () => {
  let component: IconLabelComponent;
  let fixture: ComponentFixture<IconLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconLabelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the given label', () => {
    const label = 'example';

    component.label = label;
    fixture.detectChanges();

    const labelElementText = fixture.nativeElement
      .querySelector('label')
      .textContent.trim();

    expect(label).toMatch(labelElementText);
  });
});
