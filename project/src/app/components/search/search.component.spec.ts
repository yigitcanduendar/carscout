import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { CookieService } from 'ngx-cookie';
import { MessageProviderService } from '../../services/messageprovider.service';
import { Car } from '../../model/car';
import { AppModule } from '../../app.module';
import { CarscoutRestApiService } from '../../services/carscout-rest-api.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let msgService: MessageProviderService;
  let cookieService: CookieService;
  let restService: CarscoutRestApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [CarscoutRestApiService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    msgService = TestBed.get(MessageProviderService);
    cookieService = TestBed.get(CookieService);
    restService = TestBed.get(CarscoutRestApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('get allCars should return one element', () => {
  //   spyOnProperty(restService, 'cars').and.returnValue([new Car('', '', '', '', '', '', '', '', "", '', '', '', null, '', '', '', '', '')]);
  //   expect(restService.cars.length).toEqual(1);
  // });

});
