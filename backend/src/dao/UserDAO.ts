import { User } from '../model/User';
const sqlite = require('sqlite-async');

export class UserDAO {

    static dbFile = 'carDB.db3';

    static async getAll(): Promise<User[]> {
        let db = await sqlite.open(UserDAO.dbFile);
        let users = await db.all('Select * from Users');
        db.close();
        return users;
    }
}
