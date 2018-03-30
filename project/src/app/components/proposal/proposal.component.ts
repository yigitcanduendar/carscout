import { Offer } from './../../model/Offer';
import { OfferDAO } from './../../../../../backend/src/dao/OfferDAO';
import { OfferRouter } from './../../../../../backend/src/routes/OfferRouter';
import { ImageUploaderComponent } from './../image-uploader/image-uploader.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {

  private offerID: number = 0;
  private offerRouter: OfferRouter;
  constructor() { }

  ngOnInit() {

    this.findFreeOfferID();
    ImageUploaderComponent.setOfferID(this.offerID);
  }


  getOfferID(): number {
    return this.offerID;
  }

  /**
   *  offerID wird bestimmt per Iteration über alle Offers,
   * findet durch Vergleich den höchsten ID Wert, der schon vergeben ist,
   *  nimmt die id + 1 an,
   */

  public findFreeOfferID() {

    let offers: Offer[] = OfferDAO.getAllAsOfferArray();
    for (let offer of offers) {
      if (this.offerID < offer.id) {
        this.offerID = offer.id + 1;
      }
    }
  }

}
