import { Car } from '../model/Car';
import { async } from '@angular/core/testing';
const sqlite = require('sqlite-async');

export class CarDAO {

    static dbFile = 'car.db3';

    static async getAll(): Promise<Car[]> {
        let db = await sqlite.open(CarDAO.dbFile);
        let cars = await db.all('Select * from Cars');
        db.close();
        return cars;
    }

    static async setCar(carData: Array<Object>) {

    }
}
