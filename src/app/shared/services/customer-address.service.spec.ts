/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomerAddressService } from './customer-address.service';

describe('Service: CustomerAddress', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerAddressService]
    });
  });

  it('should ...', inject([CustomerAddressService], (service: CustomerAddressService) => {
    expect(service).toBeTruthy();
  }));
});
