import { Offer } from '../model/Offer';
const sqlite = require('sqlite-async');

export class OfferDAO {

    static dbFile = 'car.db3';

    static async getAll() {
        let db = await sqlite.open(OfferDAO.dbFile);
        let offers = await db.all("SELECT * FROM offers");
        db.close();
        return offers;
    }

    static getAllAsOfferArray() {
        let db = await sqlite.open(OfferDAO.dbFile);
        let offers: Offer[] = await db.all("SELECT * FROM offers");
        db.close();
        return offers;
    }

    /**
     * funktion zum Speichern von Bildern für Angebote.
     * Benötigt id des Angebots aus DB, BildNummer (1-5), Base64 Stringform des Bildes, Bildtyp (jpg, bmp, png, usw)
     */
    static async saveImageForOffer(offer_id: number, pictureNr: String, image_base64: String, image_type: String) {

        let db = await sqlite.open(OfferDAO.dbFile);
        try {
            await db.run('INSERT INTO offers (picture' + pictureNr + ' , picture' + pictureNr + '_type) VALUES(' + image_base64 + ', ' + image_type + ') '
                + 'WHERE id=' + offer_id);
        }
        catch (e) {
            console.log("Fehler bei SQL Insert für Bilder Speichern: " + e)
            db.close();
            return false;
        }
        db.close();
        return true;
    }
}
