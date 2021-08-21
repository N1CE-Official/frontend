import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurExpertsPageComponent } from './our-experts-page.component';

describe('OurExpertsPageComponent', () => {
  let component: OurExpertsPageComponent;
  let fixture: ComponentFixture<OurExpertsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurExpertsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurExpertsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
