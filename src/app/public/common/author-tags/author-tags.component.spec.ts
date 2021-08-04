import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorTagsComponent } from './author-tags.component';

describe('AuthorTagsComponent', () => {
  let component: AuthorTagsComponent;
  let fixture: ComponentFixture<AuthorTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
