import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertRatingComponent } from './expert-rating.component';

describe('AuthorTagsComponent', () => {
  let component: ExpertRatingComponent;
  let fixture: ComponentFixture<ExpertRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
