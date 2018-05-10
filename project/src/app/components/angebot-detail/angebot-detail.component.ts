import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Car } from '../../model/car';
import { Router } from '@angular/router';
import { TodoRestApiService } from '../../services/todo-rest-api.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { MessageProviderService } from '../../services/messageprovider.service';
import { MessageType } from '../../model/messagetype.enum';
import { User } from '../../model/user';

@Component({
  selector: 'app-angebot-detail',
  templateUrl: './angebot-detail.component.html',
  styleUrls: ['./angebot-detail.component.css']
})

export class AngebotDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private cookieService: CookieService, private rest: TodoRestApiService, private msgservice: MessageProviderService) {
    this.route.params.subscribe(params => {
      this.rest.refreshSelectedCar(params['id']);
      this.rest.refreshOfferRelatedToSelectedCar(params['id']);
    });
  }

  get isFavorite() {
    let isFavourite = this.rest.getFavouriteFromUser(this.cookieService.get('user'), this.selectedCar);
    return isFavourite;
  }

  get selectedCar(): Car {
    return this.rest.selectedCar;
  }

  get relatedOffer() {
    return this.rest.offerRelatedToCar;
  }

  ngOnInit(): void {
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
      this.msgservice.display('Sie müssen eingeloggt sein, um Angebote zu Favourisieren.', MessageType.warning);
    } else if (!this.isFavorite) {
      this.rest.setFavorite(this.selectedCar, this.cookieService.get('user'));
      location.reload();
    }
  }

  public deleteAsFavourite() {
    if (this.isLoggedIn === false) {
      this.msgservice.display('Sie müssen eingeloggt sein, um Angebote zu Entfavourisieren.', MessageType.warning);
    } else if (this.isFavorite) {
      this.rest.deleteAsFavourite(this.selectedCar, this.cookieService.get('user'));
      location.reload();
    }
  }

  get imagePath(): string {
    let imagePath: string = this.rest.getImageBySelectCar(this.selectedCar.id);
    //ersetzen mit imagePath;
    return "assets/images/amg_c.jpg";
  }

}