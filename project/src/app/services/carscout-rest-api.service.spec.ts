import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarscoutRestApiService } from './carscout-rest-api.service';


describe('CarscoutRestApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarscoutRestApiService, HttpClient]
    });
  });

  it('should be created', inject([CarscoutRestApiService], (service: CarscoutRestApiService) => {
    expect(service).toBeTruthy();
  }));

  it('InsertNewUser should call refresh', inject([CarscoutRestApiService], (service: CarscoutRestApiService) => {
    spyOn(service, 'insertNewUser');
    spyOn(service, 'refreshUsers');

    service.insertNewUser(null);
    expect(service.refreshUsers).toHaveBeenCalled();
  }));

  it('updateUserData should call refresh', inject([CarscoutRestApiService], (service: CarscoutRestApiService) => {
    spyOn(service, 'insertNewUser');
    spyOn(service, 'refreshUsers');

    service.updateUserData(null);
    expect(service.refreshUsers).toHaveBeenCalled();
  }));

  it('setCar should call refresh', inject([CarscoutRestApiService], (service: CarscoutRestApiService) => {
    spyOn(service, 'setCar');
    spyOn(service, 'refreshUsers');

    service.setCar(null, '');
    expect(service.refreshUsers).toHaveBeenCalled();
  }));

  //#####################################################################################

  it('vendorTypeFromOffer should be undefined', inject([CarscoutRestApiService], (service: CarscoutRestApiService) => {
    spyOn(service, 'vendorTypeFromOffer').and.returnValue(undefined);

    let abc = service.vendorTypeFromOffer;
    expect(abc).toBeUndefined();
  }));

  it('usernameFromOffer should be undefined', inject([CarscoutRestApiService], (service: CarscoutRestApiService) => {
    spyOn(service, 'usernameFromOffer').and.returnValue(undefined);

    let abc = service.usernameFromOffer;
    expect(abc).toBeUndefined();
  }));

  it('countFavourites should toBeTruthy', inject([CarscoutRestApiService], (service: CarscoutRestApiService) => {
    spyOn(service, 'countFavourites').and.returnValue(0);

    let abc = service.usernameFromOffer;
    expect(abc).toBeTruthy();
  }));









});
