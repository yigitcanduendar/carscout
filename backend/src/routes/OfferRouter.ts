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
    console.log(JSON.stringify(offers));
    if (offers) {
      res.status(200).send(JSON.stringify(offers));
    }
    else {
      res.status(402).send('nix gefunden');
    }
  }

  async setOffer(req: Request, res: Response, next: NextFunction) {
    await OfferDAO.setOffer(JSON.parse(req.body.setOffer));
  }

  init() {
    this.router.get('/', this.getAll);
    this.router.post('/setOffer', this.setOffer);
  }
}

// const offerRoutes = new OfferRouter();
export default new OfferRouter().router;