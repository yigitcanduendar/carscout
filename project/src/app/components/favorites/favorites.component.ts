import { Component, OnInit } from '@angular/core';
import { TodoRestApiService } from '../../services/todo-rest-api.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private rest: TodoRestApiService, private cookieService: CookieService) { }

  get cars() {
    const users = this.rest.users;
    let user = this.rest.users.find(x => x.username == this.cookieService.get('user'));
    let carsWatchedString = user.cars_watched;
    let carsWatchedArray = carsWatchedString.split(',');
    const cars = [];
    carsWatchedArray.forEach(id => {
      cars.push(this.rest.cars.find(car => car.id == id));
    });
    return cars;
  }

  ngOnInit() {
  }

}
