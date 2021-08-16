import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLatestBlogPostsSectionComponent } from './home-latest-blog-posts-section.component';

describe('HomeLatestBlogPostsSectionComponent', () => {
  let component: HomeLatestBlogPostsSectionComponent;
  let fixture: ComponentFixture<HomeLatestBlogPostsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLatestBlogPostsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLatestBlogPostsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
