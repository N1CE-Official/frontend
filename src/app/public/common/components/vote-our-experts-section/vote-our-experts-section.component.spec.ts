import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteOurExpertsSectionComponent } from './vote-our-experts-section.component';

describe('HomeVoteOurExpertsSectionComponent', () => {
  let component: VoteOurExpertsSectionComponent;
  let fixture: ComponentFixture<VoteOurExpertsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteOurExpertsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteOurExpertsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
