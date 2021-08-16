import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCategoriesSectionComponent } from './home-categories-section.component';

describe('HomeCategoriesComponent', () => {
  let component: HomeCategoriesSectionComponent;
  let fixture: ComponentFixture<HomeCategoriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCategoriesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCategoriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
