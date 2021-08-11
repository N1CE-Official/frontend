import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertBadgeComponent } from './expert-badge.component';

describe('AuthorBadgeComponent', () => {
  let component: ExpertBadgeComponent;
  let fixture: ComponentFixture<ExpertBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
