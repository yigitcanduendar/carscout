import { Car } from '../model/Car';
const sqlite = require('sqlite-async');

export class CarDAO {

    static dbFile = 'carDB.db3';

    static async getAll(): Promise<Car[]> {
        let db = await sqlite.open(CarDAO.dbFile);
        let cars = await db.all('Select * from Cars');
        db.close();
        return cars;
    }

    static async getCarById(id: number): Promise<Car> {
        let db = await sqlite.open(CarDAO.dbFile);
        let car = await db.get('Select * from Cars Where id==' + id
        );
        db.close();
        return car;
    }
}
