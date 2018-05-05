import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalComponent } from './proposal.component';
import { AppModule } from '../../app.module';
import { MessageProviderService } from '../../services/messageprovider.service';
import { CookieService } from 'ngx-cookie';
import { TodoRestApiService } from '../../services/todo-rest-api.service';
import { Car } from '../../model/car';

describe('ProposalComponent', () => {
  let component: ProposalComponent;
  let fixture: ComponentFixture<ProposalComponent>;
  let msgService: MessageProviderService;
  let cookieService: CookieService;
  let restService: TodoRestApiService;


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
    restService = TestBed.get(TodoRestApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('carArray should be undefined', () => {

    spyOn(msgService, 'display');
    spyOn(restService, 'setCar');
   //let car= spyOnProperty(component, 'carArray').and.returnValue(new Car('', '', '', '', '', '', '', '', '', '', '', '', null, '', '', '', '', ''))

    //component.saveCar();

    expect(this.carArray).toBeUndefined();
  });

  it('msgService.Display should have been called', () => {

    spyOn(msgService, 'display');
    spyOn(restService, 'setOffer');
    spyOn(restService, 'setCar')

    component.saveCar();

    expect(msgService.display).toHaveBeenCalled();
  });

  it('setCar should have been called', () => {
    spyOn(restService, 'setCar')
    component.setCarIntoTable(null);
    expect(restService.setCar).toHaveBeenCalled();
  });



});
