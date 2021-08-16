import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopServicesSectionComponent } from './home-top-services-section.component';

describe('HomeTopServicesSectionComponent', () => {
  let component: HomeTopServicesSectionComponent;
  let fixture: ComponentFixture<HomeTopServicesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTopServicesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopServicesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
