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

  checkValid() {

    if (this.benutzer.name == null) {
      this.messageService.display("Bitte geben sie ein Benutzernamen ein.", MessageType.warning);
      return;
    }
    if (this.benutzer.email == null) {
      this.messageService.display("Bitte geben sie ein gültige E-Mail Adresse ein.", MessageType.warning);
      return;
    }
    if (this.benutzer.password == null) {
      this.messageService.display("Bitte geben sie ein Passwort ein.", MessageType.warning);
      return;
    }
    if (this.password2 == null) {
      this.messageService.display("Bitte wiederholen sie Ihr Passwort.", MessageType.warning);
      return;
    }

    if (this.benutzer.name.length <= 3 || this.benutzer.email.length <= 4 || this.benutzer.password.length <= 4) {
      this.messageService.display("Bitte überprüfen Sie Ihre eingaben!", MessageType.warning);
    } else if (this.benutzer.password != this.password2) {
      this.messageService.display("Bitte überprüfen Sie Ihre eingaben!" + '<br/>' + "-Passwörter Stimmen nicht überein", MessageType.warning);
    }
    else {
      this.messageService.display("success?", MessageType.success);
    }

  }

}
