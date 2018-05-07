import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../model/Car';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/User';
import { Offer } from '../model/Offer';

@Injectable()
export class TodoRestApiService {

  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  private carDataCache: Car[] = [];
  private singleCarDataCach: Car = null;
  private userDataCache: User[] = [];
  private offerDataCache: Offer[] = [];

  private refreshAllCars() {
    this.http.get('api/cars').subscribe((data: Car[]) => {
      this.carDataCache = data;
    },
      err => {
        console.log(err);
      });
  }
  public refreshSelectedCar(id: number) {
    this.http.get('api/cars/' + id).subscribe((data: Car) => {
      this.singleCarDataCach = data;
    },
      err => {
        console.log(err);
      });
  }

  private refreshUsers() {
    this.http.get('api/users').subscribe((data: User[]) => {
      this.userDataCache = data;
    },
      err => {
        console.log(err);
      });
  }

  private refreshOffers() {
    this.http.get('api/offers').subscribe((data: Offer[]) => {
      this.offerDataCache = data;
    },
      err => {
        console.log(err);
      });
  }

  public insertNewUser(user: User) {
    const body = new URLSearchParams();
    body.set('newUser', JSON.stringify(user));
    this.http.post('api/users/newUser/', body.toString(), this.options).
      subscribe(res => {
        console.log(res);
      },
        err => {
          console.log("Error occured!");
        });
  }

  public setCar(car: Car) {
    const body = new URLSearchParams();
    body.set('setCar', JSON.stringify(car));
    this.http.post('api/cars/setCar/', body.toString(), this.options).
      subscribe(res => {
        console.log(res);
      },
        err => {
          console.log("Error occured!");
        });
  }

  public setFavorite(car, username) {
    const body = new URLSearchParams();
    const data = [username, car.id];
    body.set('setFavorite', JSON.stringify(data));
    this.http.post('api/users/setFavorite/', body.toString(), this.options).
      subscribe(res => {
        console.log(res);
      },
        err => {
          console.log("setFavourite klappt nicht " + err);
        });
  }

  public getFavouriteCarsFromUser() {
    return this.users;
  }

  public countFavourites() {
    return 2;
  }

  constructor(private http: HttpClient) {
    this.refreshAllCars();
    this.refreshUsers();
    this.refreshOffers();
  }

  get offers(): Offer[] {
    return this.offerDataCache;
  }

  get users(): User[] {
    return this.userDataCache;
  }

  get cars(): Car[] {
    return this.carDataCache;
  }

  get selectedCar(): Car {
    return this.singleCarDataCach;
  }

  get contactEmailFromOffer(): String {
    return this.users.filter((e) => e.username == this.selectedCar.username)[0].email;
  }

  get usernameFromOffer(): String {
    return this.selectedCar.username;
  }

  get vendorTypeFromOffer(): String {
    return this.selectedCar.trader;
  }
}
