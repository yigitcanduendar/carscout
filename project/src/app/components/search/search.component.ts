import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public searchText: string) {
  }

  public search() {
    console.log(this.searchText);
  }

  ngOnInit() {
  }

}
