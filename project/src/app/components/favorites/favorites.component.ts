import { Component, OnInit } from '@angular/core';
import { TodoRestApiService } from '../../services/todo-rest-api.service';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private rest: TodoRestApiService, private cookieService: CookieService, private router: Router) { }

  get cars() {
    const users = this.rest.users;
    const cars = [];
    let cars_watched = null;
    this.rest.users.forEach(user => {
      if (user.username == this.cookieService.get('user')) {
        cars_watched = user.cars_watched;
      }
    });
    let carsWatchedString: string = cars_watched;
    if (carsWatchedString.length === 0) {
      return null;
    }

    if (carsWatchedString.length > 1) {
      let carsWatchedArray = carsWatchedString.split(',');
      carsWatchedArray.forEach(id => {
        cars.push(this.rest.cars.find(car => car.id == id));
      });
    }
    if (carsWatchedString.length < 2) {
      cars.push(this.rest.cars.find(car => car.id == carsWatchedString))
    }
    return cars;
  }

  public toOffer(carId: number) {
    this.router.navigateByUrl('/cars/' + carId);
  }

  ngOnInit() {
  }

}
