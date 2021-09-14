import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitApplicationPage } from './submit-application-page.component';

describe('SelectionProcessPageComponent', () => {
  let component: SubmitApplicationPage;
  let fixture: ComponentFixture<SubmitApplicationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitApplicationPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitApplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
