import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertBoxComponent } from './expert-box.component';

describe('AuthorBoxComponent', () => {
  let component: ExpertBoxComponent;
  let fixture: ComponentFixture<ExpertBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
