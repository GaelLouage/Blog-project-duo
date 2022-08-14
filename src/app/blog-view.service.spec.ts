import { TestBed } from '@angular/core/testing';

import { BlogViewService } from './blog-view.service';

describe('BlogViewService', () => {
  let service: BlogViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
