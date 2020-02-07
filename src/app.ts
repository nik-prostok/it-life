import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
// import { CategoryController } from './controllers/CategoryController';
import { MongooseHelper } from '../util/MongooseHelper';
import {Config} from './config/Config';
import {EventController} from './controllers/EventController';

export class App extends Server {

    constructor() {
        super(process.env.NODE_ENV === 'development'); // setting showLogs to true
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.setupControllers();
    }

    private setupControllers(): void {
        // const categoryController = new CategoryController();
        const urlDB = new Config().getDB();
        MongooseHelper.connect(urlDB)
            .then(() => {
                console.log('Mongoose connected')
            })
            .catch(err => {
                console.log(err);
            })
        const eventController = new EventController();
        super.addControllers([eventController]/*, optional router here*/);
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            Logger.Imp('Server listening on port: ' + port);
        })
    }
}
