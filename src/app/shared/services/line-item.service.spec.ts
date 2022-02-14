/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LineItemService } from './line-item.service';

describe('Service: LineItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LineItemService]
    });
  });

  it('should ...', inject([LineItemService], (service: LineItemService) => {
    expect(service).toBeTruthy();
  }));
});
