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
}
