import {IEvent} from '../models/EventModel';
import * as mongoose from "mongoose";
import {Schema} from "mongoose";
import {CategoryService} from "./CategoryService";
import {categoryEventSchema, ICategoryEvent} from "../models/CategoryModel";

interface IStateGame {
    currentEventId: string,
    choice: boolean,
}

export class EventService {

    private eventModel: mongoose.Model<mongoose.Document>;

    constructor(eventSchema: Schema) {
        this.eventModel = mongoose.model<IEvent>('Event', eventSchema);
    }

    public getAllEvents() {
        return new Promise(async (resolve, reject) => {
            await this.eventModel.find()
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public createEvent(newEvent: IEvent) {
        return new Promise(async(resolve, reject) => {
            await this.eventModel.create(newEvent)
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public updateEvent(newEvent: IEvent) {
        return new Promise(async (resolve, reject) => {
           await this.eventModel.findByIdAndUpdate(newEvent.id, newEvent)
                .then(resBD => {
                    resolve(resBD);
                })
               .catch(err => {
                   reject(err);
               })
        })
    }

    public getEventById(id: string) {
        return new Promise( async (resolve, reject) => {
            await this.eventModel.findById(id)
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public getNextEvent(stateGame: IStateGame) {
        return new Promise(async (resolve, reject) => {
            try {
                // @ts-ignore
                let currentEvent: IEvent = await this.getEventById(stateGame.currentEventId);
                let categoryService = new CategoryService(categoryEventSchema);
                // @ts-ignore
                let nextCategory: ICategoryEvent = await categoryService.getCategoryById(currentEvent.nextCategory);
                // @ts-ignore
                let nextEvent: IEvent = await this.getEventById(nextCategory.badEvents[0]);
                resolve(nextEvent);
            } catch (err) {
                reject(err)
            }
        })
    }
}
