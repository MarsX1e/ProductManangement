import { TestBed, inject } from '@angular/core/testing';

import { ProductshippingService } from './productshipping.service';

describe('ProductshippingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductshippingService]
    });
  });

  it('should be created', inject([ProductshippingService], (service: ProductshippingService) => {
    expect(service).toBeTruthy();
  }));
});
