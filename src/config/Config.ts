export class Config {
    urlDB: string;

    constructor() {
        this.urlDB = 'mongodb://localhost:27017/IT-life?retryWrites=true&w=majority';
    }

    public getDB(): string {
        return this.urlDB;
    }

}
