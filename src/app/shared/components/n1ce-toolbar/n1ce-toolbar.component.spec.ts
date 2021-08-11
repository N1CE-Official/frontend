import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1ceToolbarComponent } from './n1ce-toolbar.component';

describe('N1ceToolbarComponent', () => {
  let component: N1ceToolbarComponent;
  let fixture: ComponentFixture<N1ceToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N1ceToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N1ceToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
