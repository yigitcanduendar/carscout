import { Car } from '../model/car';
import { state } from '@angular/animations';
import { Sqlite } from 'sqlite-sync';

export class CarDAO {

    private DB_FILE = 'carDB.db3';

    async getAll(): Car[] {
        const cars: Car[] = [];
        Sqlite.connect(this.DB_FILE);
        Sqlite.run('SELECT * from Cars').forEach(result => {
            cars.push(new Car(
                result.id,
                result.manufacturer,
                result.modell,
                result.year,
                result.ps,
                result.consumption,
                result.km_driven,
                result.colour,
                result.seats,
                result.description,
                result.state
            ));
        });
        Sqlite.close();
        return cars;
    }
}
