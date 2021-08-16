import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertCandidateCardComponent } from './expert-candidate-card.component';

describe('AuthorBoxComponent', () => {
  let component: ExpertCandidateCardComponent;
  let fixture: ComponentFixture<ExpertCandidateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertCandidateCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertCandidateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
