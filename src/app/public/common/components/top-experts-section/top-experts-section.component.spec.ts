import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopExpertsSectionComponent } from './top-experts-section.component';

describe('TopExpertsSectionComponent', () => {
  let component: TopExpertsSectionComponent;
  let fixture: ComponentFixture<TopExpertsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopExpertsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopExpertsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
