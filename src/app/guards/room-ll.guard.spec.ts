import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { roomLLGuard } from './room-ll.guard';

describe('roomLLGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => roomLLGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
