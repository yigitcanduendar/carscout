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
        let db = await sqlite.open(CarDAO.dbFile);

        let car = await db.run("INSERT INTO Users (username, email, pw) VALUES('" + newUser.username + "','" + newUser.email + "','" + Md5.hashStr(newUser.password) + "')");
        db.close();

        return car;
    }
}
