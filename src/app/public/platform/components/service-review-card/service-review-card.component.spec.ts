import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReviewCardComponent } from './service-review-card.component';

describe('ServiceReviewCardComponent', () => {
  let component: ServiceReviewCardComponent;
  let fixture: ComponentFixture<ServiceReviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceReviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceReviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
