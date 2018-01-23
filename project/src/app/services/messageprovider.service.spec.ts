import { TestBed, inject } from '@angular/core/testing';

import { MessageproviderService } from './messageprovider.service';

describe('MessageproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageproviderService]
    });
  });

  it('should be created', inject([MessageproviderService], (service: MessageproviderService) => {
    expect(service).toBeTruthy();
  }));
});
