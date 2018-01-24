import { TestBed, inject } from '@angular/core/testing';

import { MessageProviderService } from './messageprovider.service';

describe('MessageproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageProviderService]
    });
  });

  it('should be created', inject([MessageProviderService], (service: MessageProviderService) => {
    expect(service).toBeTruthy();
  }));
});
