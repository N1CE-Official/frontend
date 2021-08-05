import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorBadgeInEvidenceComponent } from './author-badge-in-evidence.component';

describe('AuthorBadgeComponent', () => {
  let component: AuthorBadgeInEvidenceComponent;
  let fixture: ComponentFixture<AuthorBadgeInEvidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorBadgeInEvidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorBadgeInEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
