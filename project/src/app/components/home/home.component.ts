import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
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
    this.allCars();
  }

  public cars: Array<Car>;

  private allCars() {
    this.cars = this.rest.cars;
    console.log(JSON.stringify(this.cars));
  }

  public toOffer(carId: number) {
    this.router.navigate(['/offer/' + carId]);
  }

  ngOnInit() {
  }

}
