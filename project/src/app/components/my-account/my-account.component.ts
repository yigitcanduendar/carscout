import { Component, OnInit } from '@angular/core';
import { TodoRestApiService } from '../../services/todo-rest-api.service';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { element } from 'protractor';
import { MessageProviderService } from '../../services/messageprovider.service';
import { MessageType } from '../../model/messagetype.enum';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private rest: TodoRestApiService, private cookieService: CookieService, private router: Router, private messageService: MessageProviderService) {
  }

  ngOnInit() {
  }

  public benutzer: User = new User();
  public password2: string = '';
  public oldMail: string;

  public getOldMail() {
    let oldMail = '';
    this.rest.users.forEach(user => {
      if (user.username == this.cookieService.get('user')) {
        oldMail = user.email;
      }
    });
    this.oldMail = oldMail;
  }

  submit() {
    if (this.inputIsValid()) {
      this.rest.insertNewUser(this.benutzer);
      this.benutzer = null;
      this.password2 = "";
      this.messageService.display("Erfolgreich registriert!", MessageType.success);
      this.router.navigate(['/login']);
    }
  }

  inputIsValid(): boolean {
    if (this.benutzer.username == null || this.benutzer.username == "") {
      this.messageService.display("Bitte geben sie ein Benutzernamen ein.", MessageType.warning);
      return false;
    }
    if (this.benutzer.email == null || this.benutzer.email == "") {
      this.messageService.display("Bitte geben sie ein gültige E-Mail Adresse ein.", MessageType.warning);
      return false;
    }
    if (this.benutzer.pw == null || this.benutzer.pw == "") {
      this.messageService.display("Bitte geben sie ein Passwort ein.", MessageType.warning);
      return false;
    }
    if (this.password2 == null || this.password2 == "") {
      this.messageService.display("Bitte wiederholen sie Ihr Passwort.", MessageType.warning);
      return false;
    }
    return true;
  }

  showMessage() {
    if (this.benutzer.username.length <= 3 || this.benutzer.email.length <= 4 || this.benutzer.pw.length <= 4) {
      this.messageService.display("Bitte überprüfen Sie Ihre Eingaben! Username, Email oder Passwort zu kurz (<=4 Zeichen). ", MessageType.warning);
      return false;
    }
    if (this.benutzer.pw != this.password2) {
      this.messageService.display("Bitte überprüfen Sie Ihre eingaben!" + '<br/>' + "- Passwörter Stimmen nicht überein", MessageType.warning);
      return false;
    }
    if (this.rest.users.filter((e) => e.username == this.benutzer.username).length > 0) {
      this.messageService.display("Der Benutzernamen ist bereits vergeben.", MessageType.warning);
      return false;
    }
    return true;
  }

}
