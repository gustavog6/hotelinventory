import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { commentGuard } from './comment.guard';

describe('commentGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => commentGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
