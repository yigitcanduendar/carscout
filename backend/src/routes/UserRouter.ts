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

    init() {
        this.router.get('/', this.getAll);

    }
}

const userRoutes = new UserRouter();
export default userRoutes.router;