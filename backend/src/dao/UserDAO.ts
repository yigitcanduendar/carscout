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

    static async updateUser(newUser: User) {
        let db = await sqlite.open(UserDAO.dbFile);
        let user = await db.run("UPDATE Users SET email = '" + newUser.email + "', pw = '" + Md5.hashStr(newUser.pw) + "' WHERE username = '" + newUser.username + "'");
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
        cars_watched = cars_watched.toString();
        if (cars_watched.length > 0) {
            data[1] = cars_watched + ',' + data[1];
        }
        let db = await sqlite.open(UserDAO.dbFile);
        let user = await db.run("UPDATE Users SET cars_watched = '" + data[1] + "' WHERE username ='" + data[0] + "'");
        db.close();
        return user;
    }

    static async deleteAsFavourite(data) {
        let cars_watched = await this.getFavoritesFromUser(data[0]);
        let newCarsWatched;
        cars_watched = cars_watched.toString();
        if (cars_watched.length > 0) {
            newCarsWatched = cars_watched.split(',').map(item => parseInt(item));
        } else if (cars_watched.length < 1) {
            newCarsWatched = cars_watched;
        }
        else {
            return;
        }

        var index = newCarsWatched.indexOf(data[1], 0);
        if (index > -1) {
            newCarsWatched.splice(index, 1);
        }

        newCarsWatched = newCarsWatched.join(",");
        // Updaten in DB
        let db = await sqlite.open(UserDAO.dbFile);
        db.run("UPDATE Users SET cars_watched = '" + newCarsWatched + "' WHERE username ='" + data[0] + "'");
        db.close();
    }

    static async getFavoritesFromUser(username) {
        let db = await sqlite.open(UserDAO.dbFile);
        let carsWatched = await db.get("SELECT cars_watched FROM Users WHERE username = '" + username + "'");
        db.close();
        return carsWatched.cars_watched;
    }
}