import { Router, Request, Response, NextFunction } from 'express';
import { Car } from '../model/Car';
import { CarDAO } from '../dao/CarDAO';
import { async } from '@angular/core/testing';


export class CarRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    let cars = await CarDAO.getAll();
    console.log(JSON.stringify(cars));
    if (cars) {
      res.status(200).send(JSON.stringify(cars));
    }
    else {
      res.status(404).send('nix gefunden');
    }
  }

  async setCar(req: Request, res: Response, next: NextFunction) {
    let carData = [{}];
    await CarDAO.setCar(carData);
    if (carData) {
      res.status(200).send(JSON.stringify(carData));
    }
    else {
      res.status(404).send('nix gefunden');
    }
  }

  init() {
    this.router.get('/', this.getAll);
    this.router.post('/setCar', this.setCar);

  }
}

const carRoutes = new CarRouter();
export default carRoutes.router;