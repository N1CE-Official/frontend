import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertTagsComponent } from './expert-tags.component';

describe('AuthorTagsComponent', () => {
  let component: ExpertTagsComponent;
  let fixture: ComponentFixture<ExpertTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
