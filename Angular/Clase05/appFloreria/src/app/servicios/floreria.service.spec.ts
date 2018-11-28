import { TestBed } from '@angular/core/testing';

import { FloreriaService } from './floreria.service';

describe('FloreriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FloreriaService = TestBed.get(FloreriaService);
    expect(service).toBeTruthy();
  });
});
