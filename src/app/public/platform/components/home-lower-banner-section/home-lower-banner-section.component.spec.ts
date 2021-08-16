import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLowerBannerSectionComponent } from './home-lower-banner-section.component';

describe('HomeLowerBannerSectionComponent', () => {
  let component: HomeLowerBannerSectionComponent;
  let fixture: ComponentFixture<HomeLowerBannerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLowerBannerSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLowerBannerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
