import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalComponent } from './proposal.component';
import { AppModule } from '../../app.module';
import { MessageProviderService } from '../../services/messageprovider.service';
import { CookieService } from 'ngx-cookie';
import { CarscoutRestApiService } from '../../services/carscout-rest-api.service';

describe('ProposalComponent', () => {
  let component: ProposalComponent;
  let fixture: ComponentFixture<ProposalComponent>;
  let msgService: MessageProviderService;
  let cookieService: CookieService;
  let restService: CarscoutRestApiService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalComponent);
    component = fixture.componentInstance;
    msgService = TestBed.get(MessageProviderService);
    cookieService = TestBed.get(CookieService);
    restService = TestBed.get(CarscoutRestApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('msgService.Display should have been called', () => {

    spyOn(msgService, 'display');
    spyOn(restService, 'setCar');

    component.saveCar();

    expect(msgService.display).toHaveBeenCalled();
  });


  it('setCarIntoTable should have been called', () => {

    spyOn(msgService, 'display');
    spyOn(restService, 'setCar');
    spyOn(component, 'setCarIntoTable');

    component.carArray.manufacturer = 'opel';
    component.carArray.modell = 'opel';
    component.carArray.year = 'opel';
    component.carArray.price = 'opel';
    component.carArray.fuel_type = 'opel';

    component.saveCar();

    expect(component.setCarIntoTable).toHaveBeenCalled();
  });

  it('setCar should have been called', () => {
    spyOn(restService, 'setCar')
    component.setCarIntoTable(null);
    expect(restService.setCar).toHaveBeenCalled();
  });

  it('onFileChangePicture1 should have been called', () => {
    component.onFileChangePicture1(null);
    expect(component.onFileChangePicture1).toHaveBeenCalled();
  });





});
