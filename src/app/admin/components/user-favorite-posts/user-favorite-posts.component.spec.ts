import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavoritePostsComponent } from './user-favorite-posts.component';

describe('UserFavoritePostsComponent', () => {
  let component: UserFavoritePostsComponent;
  let fixture: ComponentFixture<UserFavoritePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFavoritePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavoritePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
