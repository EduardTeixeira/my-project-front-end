/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalContextService } from './global-context.service';

describe('Service: GlobalContext', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalContextService]
    });
  });

  it('should ...', inject([GlobalContextService], (service: GlobalContextService) => {
    expect(service).toBeTruthy();
  }));
});
