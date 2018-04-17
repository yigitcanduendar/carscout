import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { AppModule } from '../../app.module';
import { MessageProviderService } from '../../services/messageprovider.service';
import {User} from '../../model/user';
import {MessageType} from '../../model/messagetype.enum';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let messageService: MessageProviderService;
  let user: User;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [MessageProviderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    messageService = TestBed.get(MessageProviderService);
    user = component.benutzer;
    fixture.detectChanges();
  });

  it('should be created.', () => {
    expect(component).toBeTruthy();
  });

  it('should return false with username null.', () => {
    user.username = null;
    expect(component.inputIsValid()).toBeFalsy();
  });

  it('should return false with email null.', () => {
    user.email = null;
    expect(component.inputIsValid()).toBeFalsy();
  });

  it('should return false with pw null.', () => {
    user.pw = null;
    expect(component.inputIsValid()).toBeFalsy();
  });

  it('should return false with pw2 null.', () => {
    component.pw2 = null;
    expect(component.inputIsValid()).toBeFalsy();
  });

  it('showMessage should display when username <= 3 or email <=4 or pw <=4.', () => {
    user.username='abc';
    spyOn(messageService, 'display');
    component.showMessage();
    expect(messageService.display).toHaveBeenCalledWith('Bitte überprüfen Sie Ihre eingaben!', MessageType.warning);
  });

  it('showMessage should display when user.pw != pw2.', () => {
   user.username="ahvbhabfi";
   user.email="daidhfoafhou";
    user.pw='abcde';
    component.pw2 ='abbc';
    spyOn(messageService, 'display');
    component.showMessage();
    expect(messageService.display).toHaveBeenCalledWith('Bitte überprüfen Sie Ihre eingaben!'+'<br/>'+"-Passwörter Stimmen nicht überein", MessageType.warning);
  });

  it('showMessage should display when user is ok.', () => {
    user.username="ahvbhabfi";
    user.email="daidhfoafhou";
    user.pw='abcde';
    component.pw2 ='abcde';
    spyOn(messageService, 'display');
    component.showMessage();
    expect(messageService.display).toHaveBeenCalledWith('success?', MessageType.success);
  });


});
