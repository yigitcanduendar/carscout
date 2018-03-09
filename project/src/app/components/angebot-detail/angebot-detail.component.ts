import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Car } from '../../model/car';
import { Router } from '@angular/router';
import { TodoRestApiService } from '../../services/todo-rest-api.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { read } from 'fs';

@Component({
  selector: 'app-angebot-detail',
  templateUrl: './angebot-detail.component.html',
  styleUrls: ['./angebot-detail.component.css']
})
export class AngebotDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cookieService: CookieService, private rest: TodoRestApiService) {
    this.route.params.subscribe(params => {
      console.log("id: " + params["id"])
      this.rest.refreshSelectedCar(+params["id"]);
    });

  }

  get fhz(): Car {
    console.log('newModell' + JSON.stringify(this.rest.selectedCar));
    return this.rest.selectedCar;
  }

  ngOnInit(): void {
    // fhz = this.rest.selectedCar();
    // this.router.params
    //   .switchMap((params: Params) => this.rest.getHero(+params['id']))
    //   .subscribe(hero => this.fhz = hero);
  }

  get isLoggedIn() {
    if (this.cookieService.get("online") == undefined)

      return false;
    else
      return true;
  }
  public setAsFavourite() {

  }
}
