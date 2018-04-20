import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppModule } from '../../app.module';
import { TodoRestApiService } from '../../services/todo-rest-api.service';
import { CookieService } from 'ngx-cookie';
import { MessageProviderService } from '../../services/messageprovider.service';
import { User } from '../../model/user';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let msgService: MessageProviderService;
  let cookieService: CookieService;
  let restService: TodoRestApiService;
  const user = new User();
  user.username = "Empty";
  user.id =0;
  user.pw = "Hans-Sarpei";
  user.email = "hans@gmail.com";
  user.online = true;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    msgService = TestBed.get(MessageProviderService);
    cookieService = TestBed.get(CookieService);
    restService = TestBed.get(TodoRestApiService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should return an user array with one user.', () =>{
    let arr:User[]=[user];
    spyOnProperty(restService, 'users').and.returnValue(arr);
    expect(component.users.length).toEqual(arr.length);
  });

  it('checkUsers should return true', () => {
    user.username='Hans-Solo'
    user.pw='testing';
    let arr:User[]=[user];
    spyOnProperty(restService, 'users').and.returnValue(arr);
    expect(component.checkUser("Hans-Solo",'testing')).toBeTruthy();
  });

  it('checkUsers should return false', () => {
    spyOn(restService, 'users').and.returnValue([(new User(0, "Empty", "Hans-Sarpei", 'string@web.de').online = false)]);
    expect(component.checkUser).toBeFalsy();
  });
});

