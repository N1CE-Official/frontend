import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertCandidateDetailComponent } from './expert-candidate-detail.component';

describe('ArticleDetailComponent', () => {
  let component: ExpertCandidateDetailComponent;
  let fixture: ComponentFixture<ExpertCandidateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertCandidateDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertCandidateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
