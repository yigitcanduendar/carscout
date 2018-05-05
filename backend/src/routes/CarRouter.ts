import { Router, Request, Response, NextFunction } from 'express';
import { Car } from '../model/Car';
import { CarDAO } from '../dao/CarDAO';

export class CarRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    let cars = await CarDAO.getAll();
    if (cars) {
      res.status(200).send(JSON.stringify(cars));
    }
    else {
      res.status(404).send('nix gefunden');
    }
  }

  async setCar(req: Request, res: Response, next: NextFunction) {
    await CarDAO.setCar(JSON.parse(req.body.setCar));
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    console.log(req.params.id);
    let car = await CarDAO.getCarById(req.params.id);
    console.log(JSON.stringify(car));
    if (car) {
      res.status(200).send(JSON.stringify(car));
    }
    else {
      res.status(404).send('nix gefunden');
    }
  }

  init() {
    this.router.get('/', this.getAll);
    this.router.post('/setCar', this.setCar);
    this.router.get('/:id', this.getById)
  }
}

// const carRoutes = new CarRouter();
export default new CarRouter().router;