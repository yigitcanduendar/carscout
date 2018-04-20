import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { CookieService } from 'ngx-cookie';
import { MessageProviderService } from '../../services/messageprovider.service';
import { TodoRestApiService } from '../../services/todo-rest-api.service';
import { Car } from '../../model/car';
import { AppModule } from '../../app.module';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let msgService: MessageProviderService;
  let cookieService: CookieService;
  let restService: TodoRestApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [TodoRestApiService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    msgService = TestBed.get(MessageProviderService);
    cookieService = TestBed.get(CookieService);
    restService = TestBed.get(TodoRestApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get allCars should return one element', () => {
    spyOnProperty(restService, 'cars').and.returnValue([new Car('', '', '', '', '', '', '', '', "", '', '', '', null, '', '', '', '', '')]);
    expect(restService.cars.length).toEqual(1);
  });

});
