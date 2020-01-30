import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { CategoryController } from './api/controllers/CategoryController';
import {MongoHelper} from "../util/MongoHelper";
import {Config} from "./config/Config";

export class App extends Server {

    constructor() {
        super(process.env.NODE_ENV === 'development'); // setting showLogs to true
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.setupControllers();
    }

    private setupControllers(): void {
        const categoryController = new CategoryController();
        const urlDB = new Config().getDB();
        MongoHelper.connect(urlDB)
            .then(() => {
                Logger.Info('Connected to mongodb Atlas');
            })
            .catch(err => {
                Logger.Err(err);
            })
        super.addControllers([categoryController]/*, optional router here*/);
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            Logger.Imp('Server listening on port: ' + port);
        })
    }
}
