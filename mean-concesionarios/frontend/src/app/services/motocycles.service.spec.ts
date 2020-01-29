import { TestBed } from '@angular/core/testing';

import { MotocyclesService } from './motocycles.service';

describe('MotocyclesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotocyclesService = TestBed.get(MotocyclesService);
    expect(service).toBeTruthy();
  });
});
