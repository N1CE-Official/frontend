import { TestBed } from '@angular/core/testing';

import { BlogCategoryResolverService } from './blog-category-resolver.service';

describe('BlogCategoryResolverService', () => {
  let service: BlogCategoryResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogCategoryResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
