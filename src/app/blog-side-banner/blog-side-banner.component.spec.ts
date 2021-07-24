import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSideBannerComponent } from './blog-side-banner.component';

describe('BlogSideBannerComponent', () => {
  let component: BlogSideBannerComponent;
  let fixture: ComponentFixture<BlogSideBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSideBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSideBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
