import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBlogPostCardComponent } from './favorite-blog-post-card.component';

describe('FavoriteBlogPostCardComponent', () => {
  let component: FavoriteBlogPostCardComponent;
  let fixture: ComponentFixture<FavoriteBlogPostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteBlogPostCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteBlogPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
