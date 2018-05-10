import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { AppModule } from '../../app.module';
import { MessageProviderService } from '../../services/messageprovider.service';
import { User } from '../../model/user';
import { MessageType } from '../../model/messagetype.enum';
import { TodoRestApiService } from '../../services/todo-rest-api.service';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let messageService: MessageProviderService;
  let todo: TodoRestApiService;
  let user: User;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [MessageProviderService, TodoRestApiService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    messageService = TestBed.get(MessageProviderService);
    todo = TestBed.get(TodoRestApiService);
    user = component.benutzer;
    user.id = 0;
    user.username = 'Sebastian';
    user.email = 'sebastian@gmail.com';
    user.pw = 'lorenzios';
    component.pw2 = 'lorenzios';
    component.cb_agb = true;
    user.online = true;
    fixture.detectChanges();
  });

  it('should be created.', () => {
    expect(component).toBeTruthy();
  });

  it('should return true with user ok.', () => {
    expect(component.inputIsValid()).toBeTruthy();
  });

  it('should return false with pw2 null.', () => {
    component.pw2 = null;
    expect(component.inputIsValid()).toBeFalsy();

    component.pw2 = "";
    expect(component.inputIsValid()).toBeFalsy();
  });
  it('should return false with pw null.', () => {
    user.pw = null;
    expect(component.inputIsValid()).toBeFalsy();

    user.pw = "";
    expect(component.inputIsValid()).toBeFalsy();
  });

  it('should return false with email null or empty string.', () => {
    user.email = null;
    expect(component.inputIsValid()).toBeFalsy();

    user.email = "";
    expect(component.inputIsValid()).toBeFalsy();
  });

  it('should return false with username null.', () => {
    component.benutzer = new User();
    expect(component.inputIsValid()).toBeFalsy();


    expect(component.inputIsValid()).toBeFalsy();
  });



  // // ##################showMessage#################################
  // it('showMessage should display when username <= 3', () => {
  //   user.username = 'ac';
  //   user.email = "abcdadda"
  //   user.pw = "daddda";
  //   spyOn(messageService, 'display');
  //   component.showMessage();
  //   expect(messageService.display).toHaveBeenCalledWith('Bitte überprüfen Sie Ihre eingaben!', MessageType.warning);
  // });

  // it('showMessage should display when email <=4', () => {
  //   user.username = 'axdfsdffsc';
  //   user.email = "aa"
  //   user.pw = "daddda";
  //   spyOn(messageService, 'display');
  //   component.showMessage();
  //   expect(messageService.display).toHaveBeenCalled();
  // });

  // it('showMessage should display when  pw <=4.', () => {
  //   user.username = 'avsfgfgfxgfxgxfc';
  //   user.email = "abcdadda"
  //   user.pw = "da";
  //   spyOn(messageService, 'display');
  //   component.showMessage();
  //   expect(messageService.display).toHaveBeenCalled();
  // });

  // it('showMessage should display when user.pw != pw2.', () => {
  //   user.username = "ahvbhabfi";
  //   user.email = "daidhfoafhou";
  //   user.pw = 'abcde';
  //   component.pw2 = 'abbc';
  //   spyOn(messageService, 'display');
  //   component.showMessage();
  //   expect(messageService.display).toHaveBeenCalled();
  // });

  // it('showMessage should display when cb_agb not checked.', () => {
  //   component.cb_agb = false;
  //   component.pw2 = 'abcde';
  //   user.pw = 'abcde';
  //   spyOn(messageService, 'display');
  //   component.showMessage();
  //   expect(messageService.display).toHaveBeenCalled();
  // });

  // // ##################submit#################################
  it('submit should display when user is ok.', () => {
    user.username = "ahvbhabfi";
    user.email = "daidhfoafhou";
    user.pw = 'abcde';
    component.pw2 = 'abcde';
    component.cb_agb = true;
    spyOn(messageService, 'display');
    spyOn(component, 'inputIsValid').and.returnValue(true);
    spyOn(todo, 'insertNewUser');

    component.submit();
    expect(messageService.display).toHaveBeenCalled();
  });

});
