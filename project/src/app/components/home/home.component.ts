import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { Car } from '../../model/car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    this.allCars();
    console.log(this.cars);
  }

  public cars: Array<Car>;

  private allCars() {
    this.cars = [
      {
        id: 1,
        name: 'C63',
        erstzulassung: '09/2016',
        preis: '30.000',
        kraftstoffart: 'Benzin',
        hersteller: 'Mercedes-Benz',
        modell: 'AMG',
        fahrzeugstand: 'Unfallfrei',
        kategorie: 'Limousine',
        kilometerstand: 127000,
        leistung: 450
      },
      {
        id: 2,
        name: 'C63',
        erstzulassung: '09/2016',
        preis: '29.999,99',
        kraftstoffart: 'Benzin',
        hersteller: 'Mercedes-Benz',
        modell: 'AMG',
        fahrzeugstand: 'Unfallfrei',
        kategorie: 'Limousine',
        kilometerstand: 127000,
        leistung: 450
      }
    ];
  }

  public toOffer(carId: number) {
    this.router.navigate(['/offer/' + carId]);
  }

  ngOnInit() {
  }

}
