import { User } from '../model/User';
import { Md5 } from 'ts-md5/dist/md5';
const sqlite = require('sqlite-async');

export class UserDAO {

    static dbFile = 'car.db3';

    static async getAll(): Promise<User[]> {
        let db = await sqlite.open(UserDAO.dbFile);
        let users = await db.all('Select * from Users');
        db.close();
        return users;
    }

    static async getUser(username: string): Promise<User> {
        let db = await sqlite.open(UserDAO.dbFile);
        let user = await db.get(`select * from Users where username = ?`, username);
        db.close();
        return user;
    }

    static async insertNewUser(newUser: User) {
        let db = await sqlite.open(UserDAO.dbFile);

        let user = await db.run("INSERT INTO Users (username, email, pw) VALUES('" + newUser.username + "','" + newUser.email + "','" + Md5.hashStr(newUser.password) + "')");
        db.close();

        return user;
    }
}