export class Car {
    constructor(
        public id: number,
        public manufacturer: string,
        public modell: String,
        public ps: number,
        public year: number,
        public consumption: string,
        public km_driven: number,
        public colour: String,
        public seats: number,
        public description: string,
        public category: string,
        public fuel_type: string,
        public state: string,
        public price: string,
        public defects: string,
        public number_of_doors: string,
        public registration_date: Date,
        public transmission: string,
        public interior: string,
        public safety: string,
        public extras: string,
        public isTrader: boolean
    ) { }
}
