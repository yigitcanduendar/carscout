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

    if (!this.searchText) {
      this.messageService.display('Bitte geben Sie einen Suchbegriff ein!', MessageType.warning);
      this.searchService.setResult(this.allCars);
      return;
    }

    this.allCars.forEach(e => {
      if (
        e.modell.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1 ||
        e.manufacturer.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
      ) {
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
      } else if (results.length === 0) {
        this.messageService.display('Kein Ergebnis zu "' + this.searchText + '" gefunden!', MessageType.warning);
        this.searchService.setResult(this.allCars);
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