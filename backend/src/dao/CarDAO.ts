import { Car } from '../model/Car';
import carRoutes from '../routes/CarRouter';
const sqlite = require('sqlite-async');

export class CarDAO {

    static dbFile = 'carscout_db.db3';
    static car_id;
    static async getAll(): Promise<Car[]> {
        let db = await sqlite.open(CarDAO.dbFile);
        let cars = await db.all('Select * from Cars');
        db.close();
        return cars;
    }

    static async setCar(carData) {

        let carDataCache: Car = carData[0];
        let pic1 = carData[1];
        let db = await sqlite.open(CarDAO.dbFile);
        let car = await db.run(
            "INSERT INTO Cars (manufacturer, modell, ps, year, km_driven, colour, seats, description, price, category, fuel_type, number_of_doors, registration_date, transmission, interiors, safeties, extras, trader, username) VALUES('" + carDataCache.manufacturer + "','" + carDataCache.modell + "','" + carDataCache.ps + "','" + carDataCache.year + "','" + carDataCache.km_driven + "','" + carDataCache.colour + "','" + carDataCache.seats + "','" + carDataCache.description + "','" + carDataCache.price + "','" + carDataCache.category + "','" + carDataCache.fuel_type + "','" + carDataCache.number_of_doors + "','" + carDataCache.registration_date + "','" + carDataCache.transmission + "','" + carDataCache.interiors + "','" + carDataCache.safeties + "','" + carDataCache.extras + "','" + carDataCache.trader + "','" + carDataCache.username + "')").then(id => {
                this.car_id = id.lastID;
            });
        this.setOffer(carDataCache.username, this.car_id, pic1);
        db.close();
        return car;
    }

    /**
     * Musste leider hier gemacht werden, da ich die car_id beim abspeichern brauchte (siehe setCar()).
     * 
     * @param currentUserName 
     */
    static async setOffer(currentUserName: string, car_id: number, pic1: string) {
        let db = await sqlite.open(CarDAO.dbFile);
        let offer = await db.run("INSERT INTO Offers (username, car_id, picture1) VALUES('" + currentUserName + "','" + car_id + "','" + pic1 + "')");
        db.close();
        return offer;
    }

    static async getCarById(id: number): Promise<Car> {
        let db = await sqlite.open(CarDAO.dbFile);
        let car = await db.get('Select * from Cars Where id==' + id
        );
        db.close();
        return car;
    }
}
