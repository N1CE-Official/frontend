import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertBadgeInEvidenceComponent } from './expert-badge-in-evidence.component';

describe('AuthorBadgeComponent', () => {
  let component: ExpertBadgeInEvidenceComponent;
  let fixture: ComponentFixture<ExpertBadgeInEvidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertBadgeInEvidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertBadgeInEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
