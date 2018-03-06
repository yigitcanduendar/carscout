import { Component, OnInit } from '@angular/core';
import { TodoRestApiService } from '../../services/todo-rest-api.service';
import { Car } from '../../model/car';
import { Router } from '@angular/router';
import { MessageProviderService } from '../../services/messageprovider.service';
import { SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchText: string;
  public result: Array<Object>;

  constructor(private restApiService: TodoRestApiService, private router: Router, private searchService: SearchServiceService) { }

  public search() {


    this.allCars.forEach(e => {
      if (this.searchText === e.modell) {
        this.result = [{
          'modell': e.modell,
          'category': e.category,
          'colour': e.colour,
          'consumption': e.consumption,
          'description': e.description,
          'fuel_type': e.fuel_type,
          'km_driven': e.km_driven,
          'manufacturer': e.manufacturer,
          'price': e.price,
          'ps': e.ps,
          'seats': e.seats,
          'state': e.state,
          'year': e.year
        }];
        this.searchService.setResult(this.result);
      } else {

      }
      this.router.navigateByUrl('/results');
    });
  }

  get allCars() {
    return this.restApiService.cars;
  }

  ngOnInit() {
  }

}
