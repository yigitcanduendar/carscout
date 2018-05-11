import { Component, OnInit } from '@angular/core';
import { MessageProviderService } from '../../services/messageprovider.service';
import { MessageType } from '../../model/messagetype.enum';
import { Md5 } from 'ts-md5/dist/md5';
import { Router } from '@angular/router';
import { CookieModule, CookieService } from 'ngx-cookie';
import { User } from '../../model/user';
import { CarscoutRestApiService } from '../../services/carscout-rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private username: string;
  private pw: string;

  constructor(
    private messageService: MessageProviderService,
    private router: Router,
    private cookieService: CookieService,
    private restApiService: CarscoutRestApiService
  ) {
  }

  get users() {
    return this.restApiService.users;
  }

  /**
   * Speichert und vergleicht ob Benutzer in DB existiert,
   * wenn ja dann leite weiter zur Angebotsübersicht und wenn nicht dann return zur Login-Seite.
   */
  save() {
    if (this.checkUser(this.username, Md5.hashStr(this.pw))) {
      this.messageService.display("Erfolgreich eingeloggt!", MessageType.success);
      this.cookieService.put('online', 'success');
      this.cookieService.put('user', this.username);
      // Weiterleitung zur Startseite
      this.router.navigate(['']);
    } else {
      this.messageService.display("Benutzername oder Passwort falsch!", MessageType.danger);
      this.router.navigate(['/login']);
    }
  }


  /**
   * Überprüft, ob eingegebner User im Objekt ist.
   * Später mit DB Abfrage!
   */
  public checkUser(username, pw): Boolean {

    let us: User = this.users.find(u => u.username === username && u.pw === pw);
    if (us) {
      us.online = true;
      return true;
    }
    return false;
  }

  ngOnInit() {
  }

}
