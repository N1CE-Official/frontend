import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVoteOurExpertsSectionComponent } from './home-vote-our-experts-section.component';

describe('HomeVoteOurExpertsSectionComponent', () => {
  let component: HomeVoteOurExpertsSectionComponent;
  let fixture: ComponentFixture<HomeVoteOurExpertsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVoteOurExpertsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVoteOurExpertsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
