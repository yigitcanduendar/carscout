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

    /**
    * Funktion zum Speichern von Bildern für Angebote.
    * Benötigt id des Angebots aus DB, BildNummern als Array, welche eingefügt / überschrieben werden sollen (1-5), Base64 Stringformen der Bilder (als Array) , Bildtypen (jpg, bmp, png, usw) (als Array)
    */
    static async saveImagesForOffer(offer_id: number, pictureNrs: number[], images_base64: String[], image_types: String[]) {

        let db = await sqlite.open(OfferDAO.dbFile);
        let sqlString = "INSERT INTO offers (";
        let sqlValuesString = " VALUES( ";
        for (let i = 0; i < pictureNrs.length; i++) {
            sqlString += "picture" + pictureNrs[i] + " , picture" + pictureNrs[i] + "_type";

            sqlValuesString += "'" + images_base64[i] + "' , '" + image_types[i] + "'";
            if (i != pictureNrs.length - 1) {
                sqlString += " , "
                sqlValuesString += " , "
            } else {
                sqlString += " )";
                sqlValuesString += " )";
            }
        }


        sqlString += " WHERE id='" + offer_id + "'";
        try {
            await db.run(sqlString);
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
