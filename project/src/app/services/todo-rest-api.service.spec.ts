import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoRestApiService } from './todo-rest-api.service';


describe('TodoRestApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoRestApiService,HttpClient]
    });
  });

  it('should be created', inject([TodoRestApiService], (service: TodoRestApiService) => {
    expect(service).toBeTruthy();
  }));
  
});
