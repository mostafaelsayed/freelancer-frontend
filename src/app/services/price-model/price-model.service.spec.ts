import { TestBed } from '@angular/core/testing';

import { PriceModelService } from './price-model.service';

describe('PriceModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PriceModelService = TestBed.get(PriceModelService);
    expect(service).toBeTruthy();
  });
});
