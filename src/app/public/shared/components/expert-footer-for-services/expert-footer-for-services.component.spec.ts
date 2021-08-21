import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertFooterForServicesComponent } from './expert-footer-for-services.component';

describe('AuthorBadgeComponent', () => {
  let component: ExpertFooterForServicesComponent;
  let fixture: ComponentFixture<ExpertFooterForServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertFooterForServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertFooterForServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
