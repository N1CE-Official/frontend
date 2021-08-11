import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformCategoryComponent } from './platform-category.component';

describe('ArticleCategoryComponent', () => {
  let component: PlatformCategoryComponent;
  let fixture: ComponentFixture<PlatformCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
