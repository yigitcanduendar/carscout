import { Car } from '../model/car';

const sqlite = require('sqlite-sync');

export class UserDAO {

    private DB_FILE = 'CarDB.db3';

    public checkUserExists(): boolean {
        sqlite.connect('carDB.db3');
        //   sqlite.run('SELECT * from Cars').forEach(result => {
        //     cars.push(new Car(result.id, result.manufacturer, result.modell, result.Population, result.SurfaceArea));
        // });
        //sqlite.close();
        return false;
    }
}
