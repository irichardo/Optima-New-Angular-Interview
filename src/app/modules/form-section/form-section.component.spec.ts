import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSectionComponent } from './form-section.component';

describe('FormSectionComponent', () => {
  let component: FormSectionComponent;
  let fixture: ComponentFixture<FormSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormSectionComponent]
    });
    fixture = TestBed.createComponent(FormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
