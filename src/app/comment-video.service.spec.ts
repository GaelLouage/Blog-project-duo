import { TestBed } from '@angular/core/testing';

import { CommentVideoService } from './comment-video.service';

describe('CommentVideoService', () => {
  let service: CommentVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
