import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReviewBoxComponent } from './service-review-box.component';

describe('ServiceReviewBoxComponent', () => {
  let component: ServiceReviewBoxComponent;
  let fixture: ComponentFixture<ServiceReviewBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceReviewBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceReviewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
