import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertBadgeForServicesComponent } from './expert-badge-for-services.component';

describe('AuthorBadgeComponent', () => {
  let component: ExpertBadgeForServicesComponent;
  let fixture: ComponentFixture<ExpertBadgeForServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertBadgeForServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertBadgeForServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
