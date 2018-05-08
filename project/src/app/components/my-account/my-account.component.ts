import { Component, OnInit } from '@angular/core';
import { TodoRestApiService } from '../../services/todo-rest-api.service';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private rest: TodoRestApiService, private cookieService: CookieService, private router: Router) {
  }

  ngOnInit() {
  }

  public email: string;
  public password: string;
  public password2: string;

  /**
   * Speichert die geänderten User Daten.
   */
  public saveUserData() {
    if (this.email !== '' || this.password !== '' || this.password2 !== '') {

      //location.reload();
      //return this.router.navigate(['/']);
    } else {
      //return this.router.navigate(['/myAccount']);
    }
  }

}
