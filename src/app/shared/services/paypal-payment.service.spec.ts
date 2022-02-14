/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaypalPaymentService } from './paypal-payment.service';

describe('Service: PaypalPayment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaypalPaymentService]
    });
  });

  it('should ...', inject([PaypalPaymentService], (service: PaypalPaymentService) => {
    expect(service).toBeTruthy();
  }));
});
