import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPickerComponent } from './job-picker.component';

describe('JobPickerComponent', () => {
  let component: JobPickerComponent;
  let fixture: ComponentFixture<JobPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
