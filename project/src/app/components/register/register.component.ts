import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { MessageProviderService } from '../../services/messageprovider.service';
import { MessageType } from '../../model/messagetype.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
  }
 
  constructor(private messageService: MessageProviderService) {
  }

  public benutzer: User = new User();
  public cb_agb: boolean = false;
  public password2: string = "";

  submit(){
    if(this.inputIsValid()){
      //TODO
    }else{
      this.showMessage();
    }
  }

  inputIsValid() {
    if (this.benutzer.username == null) {
      this.messageService.display("Bitte geben sie ein Benutzernamen ein.", MessageType.warning);
      return false;
    }
    if (this.benutzer.email == null) {
      this.messageService.display("Bitte geben sie ein gültige E-Mail Adresse ein.", MessageType.warning);
      return false;
    }
    if (this.benutzer.pw == null) {
      this.messageService.display("Bitte geben sie ein Passwort ein.", MessageType.warning);
      return false;
    }
    if (this.password2 == null) {
      this.messageService.display("Bitte wiederholen sie Ihr Passwort.", MessageType.warning);
      return false;
    }
  }

  showMessage(){
    if (this.benutzer.username.length <= 3 || this.benutzer.email.length <= 4 || this.benutzer.pw.length <= 4) {
      this.messageService.display("Bitte überprüfen Sie Ihre Eingaben! Username, Email oder Passwort zu kurz (<=4 Zeichen). ", MessageType.warning);
    } else if (this.benutzer.pw != this.password2) {
      this.messageService.display("Bitte überprüfen Sie Ihre Eingaben!" + '<br/>' + "-Passwörter Stimmen nicht überein", MessageType.warning);
    } else {
      this.messageService.display("success?", MessageType.success);
    }
  }
}