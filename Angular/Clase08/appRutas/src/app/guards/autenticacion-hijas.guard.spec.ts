import { TestBed, async, inject } from '@angular/core/testing';

import { AutenticacionHijasGuard } from './autenticacion-hijas.guard';

describe('AutenticacionHijasGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticacionHijasGuard]
    });
  });

  it('should ...', inject([AutenticacionHijasGuard], (guard: AutenticacionHijasGuard) => {
    expect(guard).toBeTruthy();
  }));
});
