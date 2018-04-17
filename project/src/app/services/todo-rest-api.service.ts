import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../model/Car';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/User';

@Injectable()
export class TodoRestApiService {

  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  private carDataCache: Car[] = [];
  private singleCarDataCach: Car = null;
  private userDataCache: User[] = [];

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
      // console.log('testdata:' + JSON.stringify(data));
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

  public setOffer(username: string) {
    const body = new URLSearchParams();
    body.set('setOffer', JSON.stringify(username));
    this.http.post('api/offers/setOffer/', body.toString(), this.options).
      subscribe(res => {
        console.log(res);
      },
        err => {
          console.log("Error occured!");
        });
  }

  constructor(private http: HttpClient) {
    this.refreshAllCars();
    this.refreshUsers();
  }

  get users(): User[] {
    return this.userDataCache;
  }

  get cars(): Car[] {
    return this.carDataCache;
  }

  get selectedCar(): Car {
    // console.log('cacheStart' + JSON.stringify(this.singleCarDataCach) + 'cacheEnd');
    return this.singleCarDataCach;
  }

}
