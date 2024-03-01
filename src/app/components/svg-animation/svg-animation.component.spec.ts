import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAnimationComponent } from './svg-animation.component';

describe('SvgAnimationComponent', () => {
  let component: SvgAnimationComponent;
  let fixture: ComponentFixture<SvgAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SvgAnimationComponent]
    });
    fixture = TestBed.createComponent(SvgAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
