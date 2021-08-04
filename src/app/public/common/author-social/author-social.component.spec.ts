import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorSocialComponent } from './author-social.component';

describe('AuthorSocialComponent', () => {
  let component: AuthorSocialComponent;
  let fixture: ComponentFixture<AuthorSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
