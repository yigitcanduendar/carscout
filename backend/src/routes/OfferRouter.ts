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
    if (offers) {
      res.status(200).send(JSON.stringify(offers));
    }
    else {
      res.status(402).send('nix gefunden');
    }
  }
  
  async getOfferRelatedToCar(req: Request, res: Response, next: NextFunction) {
    console.log("ASD");
    let offer = await OfferDAO.getOfferRelatedToCar(req.params.carId);
    if (offer) {
      res.status(200).send(JSON.stringify(offer));
    }
    else {
      res.status(402).send('nix gefunden');
    }
  }

  init() {
    this.router.get('/', this.getAll);
    this.router.get('/carId', this.getOfferRelatedToCar);
  }

}

// const offerRoutes = new OfferRouter();
export default new OfferRouter().router;