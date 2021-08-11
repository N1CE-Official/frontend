import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertSocialIconsComponent } from './expert-social-icons.component';

describe('AuthorSocialComponent', () => {
  let component: ExpertSocialIconsComponent;
  let fixture: ComponentFixture<ExpertSocialIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertSocialIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertSocialIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
