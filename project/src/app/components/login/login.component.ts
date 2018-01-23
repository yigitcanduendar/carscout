import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username;
  public password;

  /** Dummy-Daten zur Zeit nur als Objekt später von der DB! */
  public users: Object = {
    Can: 'test123',
    Milan: 'test123'
  };

  constructor() { }

  /**
   * Speichert und vergleicht ob Benutzer in DB existiert,
   * wenn ja dann leite weiter und wenn nicht dann return zur Login-Seite.
   */
  save() {
    if (this.checkUser(this.username, this.password)) {
      console.log('verfügbar');
    } else {
      console.log('nicht verfügbar');
    }
  }

  /**
   * Überprüft, ob eingegebner User im Objekt ist.
   * Später mit DB Abfrage!
   */
  public checkUser(username, password): Boolean {
    for (const key in this.users) {
      if (this.users.hasOwnProperty(this.username) && this.users[this.username] === this.password) {
        return true;
      }
    }
    return false;
  }

  ngOnInit() {
  }

}
