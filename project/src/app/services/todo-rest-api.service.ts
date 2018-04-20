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
  private userDataCache: User[] = [];
  private offerDataCache: Offer[] = [];

  private refreshCars() {
    this.http.get('api/cars').subscribe((data: Car[]) => {
      this.carDataCache = data;
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

  constructor(private http: HttpClient) {
    this.refreshCars();
    this.refreshUsers();
    this.refreshOffers();
  }

  get users(): User[] {
    return this.userDataCache;
  }
  get cars(): Car[] {
    return this.carDataCache;
  }
  get offers(): Offer[] {
    return this.offerDataCache;
  }
}



