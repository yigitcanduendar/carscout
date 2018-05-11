import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router, NavigationEnd } from '@angular/router';
import { Car } from '../../model/car';
import { CarscoutRestApiService } from '../../services/carscout-rest-api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private rest: CarscoutRestApiService, private cookieService: CookieService, private router: Router) {
  }

  public navigationSubscription;

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
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites(carId);
      }
    });
  }

  initialiseInvites(carID) {
    this.rest.refreshSelectedCar(carID);
    this.rest.refreshUsers();
  }

  public getCarPicture(id: number) {
    return this.rest.getImageBySelectCar(id);
  }

  ngOnInit() {
  }

}
