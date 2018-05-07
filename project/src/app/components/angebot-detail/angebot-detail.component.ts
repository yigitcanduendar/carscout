import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Car } from '../../model/car';
import { Router } from '@angular/router';
import { TodoRestApiService } from '../../services/todo-rest-api.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { MessageProviderService } from '../../services/messageprovider.service';
import { MessageType } from '../../model/messagetype.enum';

@Component({
  selector: 'app-angebot-detail',
  templateUrl: './angebot-detail.component.html',
  styleUrls: ['./angebot-detail.component.css']
})

export class AngebotDetailComponent implements OnInit {

  public isFavorite = 0;
  constructor(private router: Router, private route: ActivatedRoute, private cookieService: CookieService, private rest: TodoRestApiService, private msgservice: MessageProviderService) {

    this.route.params.subscribe(params => {
      this.rest.refreshSelectedCar(params['id']);
      this.rest.refreshOfferRelatedToSelectedCar(params['id']);
    });
  }

  get selectedCar(): Car {
    //console.log('newModell' + JSON.stringify(this.rest.selectedCar));
    return this.rest.selectedCar;
  }

  get relatedOffer() {
  console.log(this.rest.offerRelatedToCar);
    return this.rest.offerRelatedToCar;
  }

  ngOnInit(): void {
    // fhz = this.rest.selectedCar();
    // this.router.params
    //   .switchMap((params: Params) => this.rest.getHero(+params['id']))
    //   .subscribe(hero => this.fhz = hero);
  }

  get isLoggedIn() {
    if (this.cookieService.get('online') == undefined) {
      return false;
    }
    else {
      return true;
    }
  }

  get vendorContactEmail() {
    return this.rest.contactEmailFromOffer;
  }

  get vendorUsername() {
    return this.rest.usernameFromOffer;
  }

  get vendorType() {
    return this.rest.vendorTypeFromOffer;
  }

  public setAsFavourite() {
    if (this.isLoggedIn === false) {
      this.msgservice.display('Sie müssen eingelogt sein, um Angebote zu Favorisieren.', MessageType.warning);
    } else {
      const data: Object = {
        selectedCar: this.selectedCar,
        username: this.cookieService.get('user')
      };
      this.rest.setFavorite(data);
      this.isFavorite = 1;
      this.msgservice.display('Angebot Favorisiert!', MessageType.success);
    }
  }

  public deleteAsFavourite() {
    if (this.isLoggedIn === false) {
      this.msgservice.display('Sie müssen eingelogt sein, um Angebote zu Favorisieren.', MessageType.warning);
    } else {
      this.isFavorite = 0;
      this.msgservice.display('Angebot ist aus den Favoriten entfernt!', MessageType.success);
    }
  }

  public toMainPage(carId: number) {
    this.router.navigate(['/']);
  }
}