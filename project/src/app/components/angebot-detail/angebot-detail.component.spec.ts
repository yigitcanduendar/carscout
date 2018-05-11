import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngebotDetailComponent } from './angebot-detail.component';
import { AppModule } from '../../app.module';
import { CookieService } from 'ngx-cookie';
import { MessageProviderService } from '../../services/messageprovider.service';
import { Car } from '../../model/car';
import { CarscoutRestApiService } from '../../services/carscout-rest-api.service';

describe('AngebotDetailComponent', () => {
  let component: AngebotDetailComponent;
  let fixture: ComponentFixture<AngebotDetailComponent>;
  let msgService: MessageProviderService;
  let cookieService: CookieService;
  let restService: CarscoutRestApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [CarscoutRestApiService, MessageProviderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngebotDetailComponent);
    component = fixture.componentInstance;
    msgService = TestBed.get(MessageProviderService);
    cookieService = TestBed.get(CookieService);
    restService = TestBed.get(CarscoutRestApiService);

    fixture.detectChanges();

  });

  it('should create', () => {

    spyOn(restService, "selectedCar").and.returnValue(new Car('', '', '', '', '', '', '', '', '', '', '', '', null, '', '', '', '', ''));
    spyOnProperty(component, 'selectedCar').and.returnValue(new Car('', '', '', '', '', '', '', '', '', '', '', '', null, '', '', '', '', ''));
    expect(component).toBeTruthy();
  });


});
