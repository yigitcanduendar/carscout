export class User {
    constructor(
        public id?: number,
        public username?: string,
        public pw?: string,
        public email?: string,
        public online?: boolean
    ) {
        this.online = false;
    }
}