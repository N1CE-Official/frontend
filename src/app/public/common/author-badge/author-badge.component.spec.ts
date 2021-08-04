import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorBadgeComponent } from './author-badge.component';

describe('AuthorBadgeComponent', () => {
  let component: AuthorBadgeComponent;
  let fixture: ComponentFixture<AuthorBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
