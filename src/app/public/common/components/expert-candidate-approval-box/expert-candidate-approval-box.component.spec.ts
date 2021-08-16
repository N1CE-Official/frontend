import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertCandidateApprovalBoxComponent } from './expert-candidate-approval-box.component';

describe('ExpertCandidateApprovalBoxComponent', () => {
  let component: ExpertCandidateApprovalBoxComponent;
  let fixture: ComponentFixture<ExpertCandidateApprovalBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertCandidateApprovalBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertCandidateApprovalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
