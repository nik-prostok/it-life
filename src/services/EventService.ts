import IEvent from '../models/interfaces/EventInterface';
import * as mongoose from "mongoose";
import EventInterface from "../models/interfaces/EventInterface";
import {Schema} from "mongoose";

export class EventService {

    private eventModel: mongoose.Model<mongoose.Document>;

    constructor(eventSchema: Schema) {
        this.eventModel = mongoose.model<EventInterface>('event', eventSchema);
    }

    public getAllEvents() {
        return new Promise((resolve, reject) => {
            this.eventModel.find()
                .then((resBD) =>{
                    console.log(resBD)
                    resolve(resBD);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                })
        })
    }

    public createEvent(newEvent: IEvent) {
        return new Promise((resolve, reject) => {
            this.eventModel.create(newEvent)
                .then((resBD) =>{
                    console.log(resBD)
                    resolve(resBD);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                })
        })
    }
}
