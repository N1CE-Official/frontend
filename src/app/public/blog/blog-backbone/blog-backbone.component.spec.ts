import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBackboneComponent } from './blog-backbone.component';

describe('BlogComponent', () => {
  let component: BlogBackboneComponent;
  let fixture: ComponentFixture<BlogBackboneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBackboneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBackboneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
