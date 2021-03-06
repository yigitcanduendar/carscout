import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { MessageProviderService } from '../../services/messageprovider.service';
import { MessageType } from '../../model/messagetype.enum';
import { Router, NavigationEnd } from '@angular/router';
import { CarscoutRestApiService } from '../../services/carscout-rest-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  constructor(private router: Router, private rest: CarscoutRestApiService, private messageService: MessageProviderService) {
  }

  ngOnInit(): void {
  }
  public navigationSubscription;
  public benutzer: User = new User();
  public cb_agb: boolean = false;
  public pw2: string = "";

  submit() {
    if (this.inputIsValid()) {
      this.rest.insertNewUser(this.benutzer);
      this.messageService.display("Erfolgreich registriert!", MessageType.success);
      this.router.navigateByUrl('/login');

      this.navigationSubscription = this.router.events.subscribe((e: any) => {
        // If it is a NavigationEnd event re-initalise the component
        if (e instanceof NavigationEnd) {
          this.initialiseInvites();
        }
      });
    }
  }

  initialiseInvites() {
    this.rest.refreshUsers();
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
    if (this.pw2 == null || this.pw2 == "") {
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
    if (this.benutzer.pw != this.pw2) {
      this.messageService.display("Bitte überprüfen Sie Ihre eingaben!" + '<br/>' + "- Passwörter Stimmen nicht überein", MessageType.warning);
      return false;
    }
    if (!this.cb_agb) {
      this.messageService.display("Bitte aktzeptieren Sie die AGB!", MessageType.warning);
      return false;
    }
    if (this.rest.users.filter((e) => e.username == this.benutzer.username).length > 0) {
      this.messageService.display("Der Benutzernamen ist bereits vergeben.", MessageType.warning);
      return false;
    }
    return true;
  }
}