import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../../services/search-service.service';
import { TodoRestApiService } from '../../services/todo-rest-api.service';
import { Car } from '../../model/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  constructor(private searchService: SearchServiceService, private rest: TodoRestApiService, private router: Router) {
  }

  get counter(): number {
    if (!this.searchService.results) {
      return 0;
    } else if (this.searchService.results.length === 0) {
      return this.searchService.results.length;
    } else {
      return this.searchService.results.length;
    }
  }

  get cars(): Array<Object> {
    return this.searchService.results;
  }

  public getCarPicture(id: number) {
    return this.rest.getImageBySelectCar(id);
  }

  public toOffer(carId: number) {
    this.router.navigateByUrl('/cars/' + carId);
  }

  ngOnInit() {
  }

}
