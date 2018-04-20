import { Offer } from '../model/Offer';
const sqlite = require('sqlite-async');

export class OfferDAO {

    static dbFile = 'car.db3';

    static async getAll() {
        let db = await sqlite.open(OfferDAO.dbFile);
        let offers = await db.all("SELECT * FROM Offers");
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
            await db.run('INSERT INTO Offers (picture' + pictureNr + ' , picture' + pictureNr + '_type) VALUES(' + image_base64 + ', ' + image_type + ') '
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

    static async getCurrentUserId(username) {
        let db = await sqlite.open(OfferDAO.dbFile);
        let id = await db.get('Select id from Users Where username==' + username);
        db.close();
        console.log(id);
        return id;
    }

    static async setOffer(username: string) {
        const id = this.getCurrentUserId(username);
        console.log(id);
        let db = await sqlite.open(OfferDAO.dbFile);
        let car = await db.run("INSERT INTO Offers (user_id) VALUES('" + id + "')");
        db.close();

        return car;
    }
}
