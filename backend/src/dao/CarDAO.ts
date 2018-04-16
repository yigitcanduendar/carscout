import { Car } from '../model/Car';
import { async } from '@angular/core/testing';
import carRoutes from '../routes/CarRouter';
const sqlite = require('sqlite-async');

export class CarDAO {

    static dbFile = 'car.db3';

    static async getAll(): Promise<Car[]> {
        let db = await sqlite.open(CarDAO.dbFile);
        let cars = await db.all('Select * from Cars');
        db.close();
        return cars;
    }

    static async setCar(carData: Car) {
        let db = await sqlite.open(CarDAO.dbFile);

        let car = await db.run(
            "INSERT INTO Cars (manufacturer, modell, ps, year, km_driven, colour, seats, description, price, category, fuel_type, number_of_doors, registration_date, transmission, interiors, safeties, extras, trader) VALUES('" + carData.manufacturer + carData.modell + carData.ps + carData.year + carData.km_driven + carData.colour + carData.seats + carData.description + carData.price + carData.category + carData.fuel_type + carData.number_of_doors + carData.registration_date + carData.transmission + carData.interiors + carData.safeties + carData.extras + carData.trader + "')");
        db.close();

        return car;
    }
}
