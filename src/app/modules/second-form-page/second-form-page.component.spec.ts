import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondFormPageComponent } from './second-form.component';

describe('SecondFormComponent', () => {
  let component: SecondFormPageComponent;
  let fixture: ComponentFixture<SecondFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SecondFormPageComponent]
    });
    fixture = TestBed.createComponent(SecondFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
