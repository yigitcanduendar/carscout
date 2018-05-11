import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { CarscoutRestApiService } from './services/carscout-rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public cookieService: CookieService, private rest: CarscoutRestApiService) {
  }

  get countFavourites() {
    return this.rest.countFavourites(this.cookieService.get('user'));
  }
}
