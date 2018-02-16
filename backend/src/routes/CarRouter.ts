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
    return cars;
    // if (cars) {
    //   res.status(200).send(JSON.stringify(cars));
    // }
    // else {
    //   res.status(404).send('nix gefunden');
    // }
  }

  init() {
    this.router.get('/', this.getAll);
  }
}

const carRoutes = new CarRouter();
export default carRoutes.router;