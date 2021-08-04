import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTitleComponent } from './category-title.component';

describe('ArticleTitleComponent', () => {
  let component: CategoryTitleComponent;
  let fixture: ComponentFixture<CategoryTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
