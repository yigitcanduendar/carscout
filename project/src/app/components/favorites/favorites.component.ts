import { Component, OnInit } from '@angular/core';
import { TodoRestApiService } from '../../services/todo-rest-api.service';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { Car } from '../../model/car';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private rest: TodoRestApiService, private cookieService: CookieService, private router: Router) {
  }

  get cars(): Car[] {
    const users = this.rest.users;
    const cars: Car[] = [];
    let cars_watched: string = '';
    this.rest.users.forEach(user => {
      if (user.username == this.cookieService.get('user')) {
        let currentUser = user;
        cars_watched = currentUser.cars_watched;
      }
    });
    let carsWatchedString: string = cars_watched.toString();
    if (carsWatchedString.length == 0) {
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
