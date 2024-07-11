import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authOneGuard } from './auth-one.guard';

describe('authOneGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authOneGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
