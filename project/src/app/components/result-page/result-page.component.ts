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

  get cars() {
    return this.searchService.results;
  }

  ngOnInit() {
  }

}
