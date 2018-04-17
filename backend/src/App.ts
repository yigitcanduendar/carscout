import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import CarRouter from './routes/CarRouter';
import UserRouter from './routes/UserRouter';
import { OfferRouter } from './routes/OfferRouter';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    this.express.use('/cars', CarRouter);
    this.express.use('/users', UserRouter);
    this.express.use('/offers', OfferRouter);
  }

}

export default new App().express;
