/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeliveryLeadTimeService } from './delivery-lead-time.service';

describe('Service: DeliveryLeadTime', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliveryLeadTimeService]
    });
  });

  it('should ...', inject([DeliveryLeadTimeService], (service: DeliveryLeadTimeService) => {
    expect(service).toBeTruthy();
  }));
});
