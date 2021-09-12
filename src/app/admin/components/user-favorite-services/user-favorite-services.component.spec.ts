import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavoriteServicesComponent } from './user-favorite-services.component';

describe('UserFavoriteServicesComponent', () => {
  let component: UserFavoriteServicesComponent;
  let fixture: ComponentFixture<UserFavoriteServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFavoriteServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavoriteServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
