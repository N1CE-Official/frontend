import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1ceCustomTitleComponent } from './n1ce-custom-title.component';

describe('ArticleTitleComponent', () => {
  let component: N1ceCustomTitleComponent;
  let fixture: ComponentFixture<N1ceCustomTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N1ceCustomTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N1ceCustomTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
