import { Car } from '../model/Car';
import carRoutes from '../routes/CarRouter';
const sqlite = require('sqlite-async');

export class CarDAO {

    static dbFile = 'car.db3';
    static car_id;
    static async getAll(): Promise<Car[]> {
        let db = await sqlite.open(CarDAO.dbFile);
        let cars = await db.all('Select * from Cars');
        db.close();
        return cars;
    }

    static async setCar(carData: Car) {
        let db = await sqlite.open(CarDAO.dbFile);
        let car = await db.run(
            "INSERT INTO Cars (manufacturer, modell, ps, year, km_driven, colour, seats, description, price, category, fuel_type, number_of_doors, registration_date, transmission, interiors, safeties, extras, trader, username) VALUES('" + carData.manufacturer + "','" + carData.modell + "','" + carData.ps + "','" + carData.year + "','" + carData.km_driven + "','" + carData.colour + "','" + carData.seats + "','" + carData.description + "','" + carData.price + "','" + carData.category + "','" + carData.fuel_type + "','" + carData.number_of_doors + "','" + carData.registration_date + "','" + carData.transmission + "','" + carData.interiors + "','" + carData.safeties + "','" + carData.extras + "','" + carData.trader + "','" + carData.username + "')").then(id => {
                this.car_id = id.lastID;
            });
        this.setOffer(carData.username, this.car_id);
        db.close();
        return car;
    }

    /**
     * Setzt die Offer mit dem derzeitig eingeloggten User.
     * @param currentUserName 
     */
    static async setOffer(currentUserName: string, car_id: number) {
        let db = await sqlite.open(CarDAO.dbFile);
        let offer = await db.run("INSERT INTO Offers (username, car_id) VALUES('" + currentUserName + "','" + car_id + "')");
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
