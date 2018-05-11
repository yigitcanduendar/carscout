import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router, NavigationEnd } from '@angular/router';
import { Car } from '../../model/car';
import { NextFunction } from 'express';
import { TodoRestApiService } from '../../services/todo-rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router, private rest: TodoRestApiService) {
  }

  public navigationSubscription;

  get cars() {
    return this.rest.cars;
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
