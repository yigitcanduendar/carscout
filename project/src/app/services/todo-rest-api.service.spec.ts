import { TestBed, inject } from '@angular/core/testing';

import { TodoRestApiService } from './todo-rest-api.service';

describe('TodoRestApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoRestApiService]
    });
  });

  it('should be created', inject([TodoRestApiService], (service: TodoRestApiService) => {
    expect(service).toBeTruthy();
  }));
});
