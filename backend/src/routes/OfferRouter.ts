import { Router, Request, Response, NextFunction } from 'express';
import { Offer } from '../model/Offer';
import { OfferDAO } from '../dao/OfferDAO';
import { User } from '../../../project/src/app/model/user';


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

  async setOffer(req: Request, res: Response, next: NextFunction) {
    await OfferDAO.setOffer(JSON.parse(req.body.setOffer));
  }

  init() {
    this.router.get('/', this.getAll);
    this.router.get('/setOffer', this.setOffer);
  }
}

const offerRoutes = new OfferRouter();
export default offerRoutes.router;