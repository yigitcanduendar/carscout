import { Component, OnInit } from '@angular/core';
import { TodoRestApiService } from '../../services/todo-rest-api.service';
import { CookieService } from 'ngx-cookie';
import { Router, NavigationEnd } from '@angular/router';
import { User } from '../../model/user';
import { element } from 'protractor';
import { MessageProviderService } from '../../services/messageprovider.service';
import { MessageType } from '../../model/messagetype.enum';
import { Car } from '../../model/car';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private rest: TodoRestApiService, private cookieService: CookieService, private router: Router, private messageService: MessageProviderService) {
  }

  public navigationSubscription;

  ngOnInit() {
  }

  public benutzer: User = new User();
  public password2: string = '';

  get oldMail() {
    let oldMail = '';
    this.rest.users.forEach(user => {
      let currentUser = user;

      if (currentUser.username == this.cookieService.get('user')) {
        oldMail = currentUser.email;
      }
    });
    return oldMail;
  }

  submit() {
    this.benutzer.username = this.cookieService.get('user');
    if (this.inputIsValid()) {
      this.rest.updateUserData(this.benutzer);
      this.messageService.display("Deine Benutzerdaten wurden geändert!", MessageType.success);
      location.reload();
    }
  }

  public getCarPicture(id: number) {
    return this.rest.getImageBySelectCar(id);
  }


  inputIsValid(): boolean {
    if (this.benutzer.email == null || this.benutzer.email == "") {
      this.messageService.display("Bitte geben sie ein gültige E-Mail Adresse ein.", MessageType.warning);
      return false;
    }
    if (this.benutzer.pw == null || this.benutzer.pw == "") {
      this.messageService.display("Bitte geben sie ein Passwort ein.", MessageType.warning);
      return false;
    }
    if (this.password2 == null || this.password2 == "") {
      this.messageService.display("Bitte wiederholen sie Ihr Passwort.", MessageType.warning);
      return false;
    }
    return true;
  }

  showMessage() {
    if (this.benutzer.email.length <= 4 || this.benutzer.pw.length <= 4) {
      this.messageService.display("Bitte überprüfen Sie Ihre Eingaben! Username, Email oder Passwort zu kurz (<=4 Zeichen). ", MessageType.warning);
      return false;
    }
    if (this.benutzer.pw != this.password2) {
      this.messageService.display("Bitte überprüfen Sie Ihre eingaben!" + '<br/>' + "- Passwörter Stimmen nicht überein", MessageType.warning);
      return false;
    }
    return true;
  }

  get cars(): Car[] {
    const cars: Car[] = [];
    const username: string = this.cookieService.get('user');
    const carIDs = [];

    this.rest.offers.forEach(offer => {
      let currentOffer = offer;
      if (username == currentOffer['username']) {
        carIDs.push(currentOffer['car_id']);
      }
    });

    this.rest.cars.forEach(car => {
      let currentCar = car;
      carIDs.forEach(id => {
        let currentID = id;
        if (currentID == currentCar.id) {
          cars.push(currentCar);
        }
      });
    });

    return cars;
  }

  public toOffer(carId: number) {
    this.router.navigateByUrl('/cars/' + carId);
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites(carId);
      }
    });
  }

  initialiseInvites(carID) {
    this.rest.refreshSelectedCar(carID);
    this.rest.refreshUsers();
  }

}
