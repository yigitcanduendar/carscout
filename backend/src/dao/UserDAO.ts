import { User } from '../model/User';
import { Md5 } from 'ts-md5/dist/md5';
import { async } from '@angular/core/testing';
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
        let user = await db.get(`select * from Users where username ==`, username);
        db.close();
        return user;
    }

    static async insertNewUser(newUser: User) {
        let db = await sqlite.open(UserDAO.dbFile);

        let user = await db.run("INSERT INTO Users (username, email, pw) VALUES('" + newUser.username + "','" + newUser.email + "','" + Md5.hashStr(newUser.pw) + "')");
        db.close();

        return user;
    }

    static async getCarsWatchedFromUser(username: string) {
        let db = await sqlite.open(UserDAO.dbFile);
        let data = await db.get("SELECT id,cars_watched FROM Users WHERE username = '" + username + "'");
        db.close();
        return data;
    }

    static async setFavorite(data) {
        let cars_watched = await this.getFavoritesFromUser(data[0]);

        data[1] = cars_watched + ',' + data[1];

        let db = await sqlite.open(UserDAO.dbFile);
        let user = await db.run("UPDATE Users SET cars_watched = '" + data[1] + "' WHERE username ='" + data[0] + "'");
        db.close();
        return user;
    }

    static async getFavoritesFromUser(username): Promise<string> {
        let db = await sqlite.open(UserDAO.dbFile);
        let carsWatched = await db.get("SELECT cars_watched FROM Users WHERE username = '" + username + "'");
        db.close();
        return carsWatched.cars_watched;
    }
}