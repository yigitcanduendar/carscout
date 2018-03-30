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
  
  /**
   * Prüft die übergebenen Variablen, gibt bei Fehlern String zurück oder wenn
   * in Ordnung speichert ein Bild per OfferDAO in der Datenbank ab und gibt 200 Ok als String zurück
   * @param offer_id Id des Angebots, zu dem das Bild gehört
   * @param pictureNr es kann eines von 5 Bildern sein, also Wert (1-5), ist für DB Spalte wichtig
   * @param file die Bilddatei
   */
  static async saveImageForOffer(offer_id: number, pictureNr: number, file: File): Promise<string> {
    let pictureNrString: String;
    let filetype: String;
    if (offer_id < 0) {
      return "400 Bad Request. Das ist keine echte Id eines Angebots";

    }
    if (1 <= pictureNr && pictureNr <= 5) {
      pictureNrString = pictureNr.toString();
    } else {
      return "400 Bad Request. Picture Nr war keine zulässige Zahl, (nicht zwischen 1 und 5)";
    }

    if (file) {
      filetype = file.type;
      var allowedFiletypes: String[] = ["jpg", "jpeg", "png", "bmp"];
      if (allowedFiletypes.indexOf(filetype) == -1) {
        return "406 Not Acceptable. Die Datei muss einen der folgenden Typen haben " + allowedFiletypes.toString;
      }

    } else {
      return "400 Bad Request. File nicht vorhanden /  nicht lesbar ";
    }
    
    let fileAsBase64String: String;
    let fileReader: FileReader;
    fileReader.readAsDataURL(file);
    fileAsBase64String = fileReader.result;
    if (!OfferDAO.saveImageForOffer(offer_id, pictureNrString, fileAsBase64String, file.type)) {
      return "400 BadRequest. Speichern schlug fehl.";
    }
    return "200 Ok. Image saved succesfully";
  }
}

const carRoutes = new OfferRouter();
export default carRoutes.router;