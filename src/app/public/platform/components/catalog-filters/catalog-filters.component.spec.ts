import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogFiltersComponent } from './catalog-filters.component';

describe('AuthorTagsComponent', () => {
  let component: CatalogFiltersComponent;
  let fixture: ComponentFixture<CatalogFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
