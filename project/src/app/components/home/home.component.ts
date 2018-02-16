import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { Car } from '../../model/car';
import { CarDAO } from '../../DAO/CarDAO';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    this.allCars();
  }

  public cars: Array<Car>;

  private allCars() {
    const carDAO = new CarDAO();
    this.cars = carDAO.getAll();
  }

  public toOffer(carId: number) {
    this.router.navigate(['/offer/' + carId]);
  }

  ngOnInit() {
  }

}
