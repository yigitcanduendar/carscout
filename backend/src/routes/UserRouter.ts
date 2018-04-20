import { Router, Request, Response, NextFunction } from 'express';
import { User } from '../model/User';
import { UserDAO } from '../dao/UserDAO';


export class UserRouter {
    router: Router

    constructor() {
        this.router = Router();
        this.init();
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        let users = await UserDAO.getAll();

        console.log(users);
        if (users) {
            res.status(200).send(JSON.stringify(users));
        }
        else {
            res.status(404).send('nix gefunden');
        }
    }

    async getUser(req: Request, res: Response, next: NextFunction) {
        let user = await UserDAO.getUser(req.params.username);

        console.log(JSON.stringify(user));
        if (user) {
            res.status(200).send(JSON.stringify(user));
        }
        else {
            res.status(404).send('nix gefunden');
        }
    }

    async insertNewUser(req: Request, res: Response, next: NextFunction) {
        await UserDAO.insertNewUser(JSON.parse(req.body.newUser));
    }

    init() {
        this.router.get('/', this.getAll);
        this.router.get('/:username', this.getUser);
        this.router.post('/newUser', this.insertNewUser);
    }
}

// const userRoutes = new UserRouter();
export default new UserRouter().router;