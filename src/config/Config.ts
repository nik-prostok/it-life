export class Config {
    urlDB: string;

    constructor() {
        this.urlDB = 'mongodb+srv://shop:ghjtyubnm@shopsystem-taxgx.mongodb.net/IT-life?retryWrites=true&w=majority';
    }


    public getDB(): string {
        return this.urlDB;
    }

}
