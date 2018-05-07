import { Component, OnInit } from '@angular/core';
import { TodoRestApiService } from '../../services/todo-rest-api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private rest: TodoRestApiService) { }

  get cars() {
    return this.rest.getFavouriteCarsFromUser;
  }

  ngOnInit() {
  }

}
