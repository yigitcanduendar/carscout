import { Router, Request, Response, NextFunction } from 'express';
import { Offer } from '../model/Offer';
import { OfferDAO } from '../dao/OfferDAO';


export class OfferRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }


  async getAll(req: Request, res: Response, next: NextFunction) {
    let offers = await OfferDAO.getAll();
    return offers;

  }

  init() {
    this.router.get('/', this.getAll);
  }
}

const carRoutes = new OfferRouter();
export default carRoutes.router;