import { Component, OnInit } from '@angular/core';
import { TodoRestApiService } from '../../services/todo-rest-api.service';
import { Car } from '../../model/car';
import { Router } from '@angular/router';
import { MessageProviderService } from '../../services/messageprovider.service';
import { SearchServiceService } from '../../services/search-service.service';
import { MessageType } from '../../model/messagetype.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchText: string;
  public result;

  constructor(
    private restApiService: TodoRestApiService,
    private router: Router,
    private searchService: SearchServiceService,
    private messageService: MessageProviderService
  ) { }

  public search() {
    let results = [];
    this.allCars.forEach(e => {
      console.log(e.modell);
      if (e.modell.toLocaleLowerCase().indexOf(this.searchText.toLocaleLowerCase()) !== -1) {
        this.result = {
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
        };
        results.push(this.result);
        this.searchService.setResult(results);
      } else {
        this.searchService.setResult([]);
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
