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
    let user = this.rest.users.find(x => x.username == this.cookieService.get('user'));
    let carsWatchedString = user.cars_watched.toString();
    if (carsWatchedString.length === 0)
      return null;
    let carsWatchedArray = carsWatchedString.split(',');
    const cars = [];
    carsWatchedArray.forEach(id => {
      cars.push(this.rest.cars.find(car => car.id == id));
    });
    return cars;
  }

  public toOffer(carId: number) {
    this.router.navigate(['/cars/' + carId]);
  }

  ngOnInit() {
  }

}
