import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { MessageProviderService } from '../../services/messageprovider.service';
import { MessageType } from '../../model/messagetype.enum';
import { TodoRestApiService } from "../../services/todo-rest-api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
  }
 
  constructor(private messageService: MessageProviderService,private rest :TodoRestApiService,private router: Router) {
  }

  public benutzer: User = new User();
  public cb_agb: boolean = false;
  public password2: string = "";

  submit(){
    if(this.inputIsValid()){
      this.rest.insertNewUser(this.benutzer);
      this.messageService.display("Erfolgreich registriert!", MessageType.success);
      this.router.navigate(['/login']);
    }
  }

  inputIsValid() {
    if (this.benutzer.username == null || this.benutzer.username == "") {
      this.messageService.display("Bitte geben sie ein Benutzernamen ein.", MessageType.warning);
      return false;
    }
    if (this.benutzer.email == null || this.benutzer.email == "") {
      this.messageService.display("Bitte geben sie ein gültige E-Mail Adresse ein.", MessageType.warning);
      return false;
    }
    if (this.benutzer.password == null || this.benutzer.password == "") {
      this.messageService.display("Bitte geben sie ein Passwort ein.", MessageType.warning);
      return false;
    }
    if (this.password2 == null || this.password2 == "") {
      this.messageService.display("Bitte wiederholen sie Ihr Passwort.", MessageType.warning);
      return false;
    }
    if (this.benutzer.username.length <= 3 || this.benutzer.email.length <= 4 || this.benutzer.password.length <= 4) {
      this.messageService.display("Bitte überprüfen Sie Ihre eingaben!", MessageType.warning);
      return false;
    } 
    if (this.benutzer.password != this.password2) {
      this.messageService.display("Bitte überprüfen Sie Ihre eingaben!" + '<br/>' + "-Passwörter Stimmen nicht überein", MessageType.warning);
      return false;
    } 
    if (!this.cb_agb) {
      this.messageService.display("Bitte aktzeptieren Sie die AGB!", MessageType.warning);
      return false;
    } 
    if(this.rest.users.filter((e) => e.username == this.benutzer.username).length > 0){
      this.messageService.display("Der Benutzernamen ist bereits vergeben.", MessageType.warning);
      return false;
    }
    return true;
  }
}