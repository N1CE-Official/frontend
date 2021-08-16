import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopBannerSectionComponent } from './home-top-banner-section.component';

describe('HomeBannerComponent', () => {
  let component: HomeTopBannerSectionComponent;
  let fixture: ComponentFixture<HomeTopBannerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTopBannerSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopBannerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
