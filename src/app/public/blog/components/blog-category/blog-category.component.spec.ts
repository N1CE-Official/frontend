import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCategoryComponent } from './blog-category.component';

describe('ArticleCategoryComponent', () => {
  let component: BlogCategoryComponent;
  let fixture: ComponentFixture<BlogCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
