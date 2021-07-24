import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleInEvidenceComponent } from './article-in-evidence.component';

describe('HorizontalBannerComponent', () => {
  let component: ArticleInEvidenceComponent;
  let fixture: ComponentFixture<ArticleInEvidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleInEvidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleInEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
