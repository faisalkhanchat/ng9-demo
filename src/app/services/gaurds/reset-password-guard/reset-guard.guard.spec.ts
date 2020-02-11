import { TestBed, async, inject } from '@angular/core/testing';

import { ResetGuardGuard } from './reset-guard.guard';

describe('ResetGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetGuardGuard]
    });
  });

  it('should ...', inject([ResetGuardGuard], (guard: ResetGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
