import { Offer } from '../model/Offer';
const sqlite = require('sqlite-async');


export class OfferDAO {

    static dbFile = 'car.db3';

    static async getAll() {
        let db = await sqlite.open(OfferDAO.dbFile);
        try {
            let offers = await db.all("SELECT * FROM Offers");
            db.close();
            return offers;
        } catch (e) {
            console.log("Got an error!", e);
        }
    }

     static async getOfferRelatedToCar(cardId: string): Promise<Offer> {
        console.log("DA");
        let db = await sqlite.open(OfferDAO.dbFile);
        try {
            let offer = await db.all('SELECT * FROM Offers Where car_id =='+ cardId);
            db.close();
            return offer;
        } catch (e) {
            console.log("Got an error!", e);
        }
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
