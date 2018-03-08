import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  constructor(private searchService: SearchServiceService) {
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

  ngOnInit() {
  }

}
