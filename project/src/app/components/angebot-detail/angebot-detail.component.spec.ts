import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngebotDetailComponent } from './angebot-detail.component';
import { AppModule } from '../../app.module';
import { CookieService } from 'ngx-cookie';
import { MessageProviderService } from '../../services/messageprovider.service';
import { TodoRestApiService } from '../../services/todo-rest-api.service';
import { Car } from '../../model/car';

describe('AngebotDetailComponent', () => {
  let component: AngebotDetailComponent;
  let fixture: ComponentFixture<AngebotDetailComponent>;
  let msgService: MessageProviderService;
  let cookieService: CookieService;
  let restService: TodoRestApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [TodoRestApiService, MessageProviderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngebotDetailComponent);
    component = fixture.componentInstance;
    msgService = TestBed.get(MessageProviderService);
    cookieService = TestBed.get(CookieService);
    restService = TestBed.get(TodoRestApiService);

    fixture.detectChanges();
    spyOn(restService, 'selectedCar').and.returnValue(new Car('', '', '', '', '', '', '', '', "", '', '', '', null, '', '', '', '', ''));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display when login is false', () => {

    spyOn(msgService, 'display');
    spyOn(cookieService, 'get').and.returnValue(undefined);
    component.setAsFavourite();
    expect(msgService.display).toHaveBeenCalled();
  });


});
