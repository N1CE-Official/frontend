import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1ceFooterComponent } from './n1ce-footer.component';

describe('N1ceFooterComponent', () => {
  let component: N1ceFooterComponent;
  let fixture: ComponentFixture<N1ceFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N1ceFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N1ceFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
