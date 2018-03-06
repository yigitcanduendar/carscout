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
  private userDataCache: User[] = [];

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

  constructor(private http: HttpClient) {
    this.refreshCars();
    this.refreshUsers();
  }

  get users(): User[] {
    return this.userDataCache;
  }
  get cars(): Car[] {
    return this.carDataCache;
  }
}



