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
     * Holt den derzeitigen User der eingeloggt ist.
     * @param username 
     */
    static async getCurrentUserId(currentUserName) {
        let db = await sqlite.open(OfferDAO.dbFile);
        let user = await db.get('Select * from Users Where username == ' + currentUserName);
        db.close();
        return user;
    }

    /**
     * Setzt die Offer mit dem derzeitig eingeloggten User.
     * @param currentUserName 
     */
    static async setOffer(currentUserName: string, car_id) {
        let user_id = this.getCurrentUserId(currentUserName);
        console.log(user_id);
        let db = await sqlite.open(OfferDAO.dbFile);
        let offer = await db.run("INSERT INTO Offers (user_id, car_id) VALUES('" + user_id + "','" + 1 + "')");
        db.close();
        return offer;
    }
}
