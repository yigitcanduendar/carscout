import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountComponent } from './my-account.component';
import { MessageProviderService } from '../../services/messageprovider.service';
import { CookieService } from 'ngx-cookie';
import { TodoRestApiService } from '../../services/todo-rest-api.service';

describe('MyAccountComponent', () => {
  let component: MyAccountComponent;
  let fixture: ComponentFixture<MyAccountComponent>;
  let msgService: MessageProviderService;
  let cookieService: CookieService;
  let restService: TodoRestApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyAccountComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountComponent);
    component = fixture.componentInstance;
    msgService = TestBed.get(MessageProviderService);
    cookieService = TestBed.get(CookieService);
    restService = TestBed.get(TodoRestApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('oldMail should return empty string', () => {
    let abc = component.oldMail;
    expect(abc).toBe('');
  });


  it('submit should display', () => {
    spyOnProperty(component, 'inputIsValid').and.returnValue(true);
    component.submit();
    expect(msgService.display).toHaveBeenCalled();
  });



});
