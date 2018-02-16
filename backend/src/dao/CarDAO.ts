import { Car } from '../model/Car';
const sqlite = require('sqlite-async');

export class CarDAO {

    static dbFile = 'carDB.db3';

    static async getAll() {
        let db = await sqlite.open(CarDAO.dbFile);
        let cars = await db.all('Select * from Cars');
        db.close();
        return cars;
    }
}
