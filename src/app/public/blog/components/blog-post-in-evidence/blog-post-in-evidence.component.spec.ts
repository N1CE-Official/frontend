import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostInEvidenceComponent } from './blog-post-in-evidence.component';

describe('HorizontalBannerComponent', () => {
  let component: BlogPostInEvidenceComponent;
  let fixture: ComponentFixture<BlogPostInEvidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostInEvidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostInEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
