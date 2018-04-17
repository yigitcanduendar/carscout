import { Offer } from '../model/Offer';
import { User } from '../../../project/src/app/model/user';
const sqlite = require('sqlite-async');

export class OfferDAO {

    static dbFile = 'car.db3';

    static async getAll() {
        let db = await sqlite.open(OfferDAO.dbFile);
        let offers = await db.all("SELECT * FROM offers");
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

    static async setOffer(username: string) {
        let db = await sqlite.open(OfferDAO.dbFile);
        let id = await db.get('Select id from Users Where username==' + username);
        db.close();

        let db = await sqlite.open(OfferDAO.dbFile);
        let car = await db.run(
            "INSERT INTO Offers (userId) VALUES('" + id + "','" + carData.modell + "','" + carData.ps + "')");
        db.close();

        return car;
    }
}
