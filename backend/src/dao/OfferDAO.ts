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
            throw e;
        }
    }
}
