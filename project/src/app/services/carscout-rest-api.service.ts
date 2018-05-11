import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../model/Car';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/User';
import { Offer } from '../model/Offer';
import { element } from 'protractor';

@Injectable()
export class CarscoutRestApiService {

  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  private carDataCache: Car[] = [];
  private singleCarDataCach: Car = null;
  private singleOfferRelatedToCarDataCach: Offer = null;
  private userDataCache: User[] = [];
  private offerDataCache: Offer[] = [];

  public refreshAllCars() {
    this.http.get('api/cars').subscribe((data: Car[]) => {
      this.carDataCache = data;
    },
      err => {
        console.log(err);
      });
  }

  public refreshSelectedCar(id: number) {
    this.http.get('api/cars/' + id).subscribe((data: Car) => {
      this.singleCarDataCach = data;
    },
      err => {
        console.log(err);
      });
  }

  public refreshOfferRelatedToSelectedCar(carId: String) {
    this.http.get('api/offers/' + carId).subscribe((data: Offer) => {
      this.singleOfferRelatedToCarDataCach = data;
    },
      err => {
        console.log(err);
      });
  }

  public refreshUsers() {
    this.http.get('api/users').subscribe((data: User[]) => {
      this.userDataCache = data;
    },
      err => {
        console.log(err);
      });
  }

  private refreshOffers() {
    this.http.get('api/offers').subscribe((data: Offer[]) => {
      this.offerDataCache = data;
    },
      err => {
        console.log(err);
      });
  }

  public insertNewUser(user: User) {
    const body = new URLSearchParams();
    body.set('newUser', JSON.stringify(user));
    this.http.post('api/users/newUser/', body.toString(), this.options).
      subscribe(res => {
        console.log(res);
      },
      err => {
        console.log("Error occured!");
      });
    this.refreshUsers();
  }

  public updateUserData(user: User) {
    const body = new URLSearchParams();
    body.set('updateUser', JSON.stringify(user));
    this.http.post('api/users/updateUser/', body.toString(), this.options).
      subscribe(res => {
        console.log(res);
      },
      err => {
        console.log("Error occured!");
      });
    this.refreshUsers();
  }

  public setCar(car: Car, pic1: string) {
    const body = new URLSearchParams();
    const data = [car, pic1];
    body.set('setCar', JSON.stringify(data));
    this.http.post('api/cars/setCar/', body.toString(), this.options).
      subscribe(res => {
        console.log(res);
      },
      err => {
        console.log("Error occured!");
      });
    this.refreshAllCars();
    this.refreshOffers();
  }

  public setFavorite(car, username) {
    const body = new URLSearchParams();
    const data = [username, car.id];
    body.set('setFavorite', JSON.stringify(data));
    this.http.post('api/users/setFavorite/', body.toString(), this.options).
      subscribe(res => {
        console.log(res);
      },
      err => {
        console.log("setFavourite klappt nicht " + err);
      });
    this.refreshUsers();
  }

  public deleteAsFavourite(car, username) {
    const body = new URLSearchParams();
    const data = [username, car.id];
    body.set('deleteAsFavourite', JSON.stringify(data));
    this.http.post('api/users/deleteAsFavourite/', body.toString(), this.options).
      subscribe(res => {
        console.log(res);
      },
      err => {
        console.log("deleteAsFavourite klappt nicht " + err);
      });
    this.refreshUsers();
  }

  public getFavouriteFromUser(username, car: Car) {
    let carsWatchedString: string = '';
    let carsWatchedArray = [];
    let isFavourite = false;
    this.users.forEach(user => {
      if (user.username === username) {
        let currentUser = user;
        carsWatchedString = currentUser.cars_watched.toString();
      }
    });

    if (carsWatchedString.length > 1) {
      carsWatchedArray = carsWatchedString.split(',');
    } else if (carsWatchedString.length < 2) {
      carsWatchedArray = [carsWatchedString];
    } else {
      return isFavourite;
    }

    carsWatchedArray.forEach(id => {
      let carWatchedId = id;
      if (carWatchedId != '') {
        if (carWatchedId === car.id.toString()) {
          isFavourite = true;
        }
      }
    });
    return isFavourite;
  }

  // Muss noch angepasst werden
  public countFavourites(username) {
    let carsWatchedString: string = '';
    let carsWatchedArray = [];
    this.users.forEach(user => {
      if (user.username === username) {
        let currentUser = user;
        carsWatchedString = currentUser.cars_watched.toString();
        if (currentUser.cars_watched === '') {
          carsWatchedString = '';
        }
      }
    });
    if (carsWatchedString.length < 1) {
      return 0;
    } else if (carsWatchedString.length > 1) {
      carsWatchedString.split(',').forEach(intstring => {
        carsWatchedArray.push(parseInt(intstring))
      });
    } else if (carsWatchedString.length < 2) {
      carsWatchedArray = [carsWatchedString]
    }
    return carsWatchedArray.length;
  }

  constructor(private http: HttpClient) {
    this.refreshAllCars();
    this.refreshUsers();
    this.refreshOffers();

  }

  get offers(): Offer[] {
    return this.offerDataCache;
  }

  get users(): User[] {
    return this.userDataCache;
  }

  get cars(): Car[] {
    return this.carDataCache;
  }

  get selectedCar(): Car {
    return this.singleCarDataCach;
  }

  get offerRelatedToCar(): Offer {
    return this.singleOfferRelatedToCarDataCach;
  }

  get contactEmailFromOffer() {
    return this.users.filter((e) => e.username == this.selectedCar.username)[0].email;
  }

  get usernameFromOffer(): String {
    return this.selectedCar.username;
  }

  get vendorTypeFromOffer(): String {
    return this.selectedCar.trader;
  }

  public getImageBySelectCar(id): string {
    let imagePath: string = '';
    this.offers.forEach(offer => {
      let currentOffer: any = offer;
      let carID = currentOffer.car_id;
      if (carID == id) {
        //console.log(offer);
        imagePath = currentOffer.picture1
        return imagePath;
      }
    });
    return imagePath;
  }
}
