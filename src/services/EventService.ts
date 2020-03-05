import {IEvent} from '../models/EventModel';
import * as mongoose from "mongoose";
import {Schema} from "mongoose";
import {PlayerService} from "./PlayerService";
import {playerSchema, IPlayer} from "../models/PlayerModel";

import {categoryEventSchema, ICategoryEvent} from "../models/CategoryModel";

interface IStateGame {
    currentEventId: string,
    choice: boolean,
    idPlayer: string,
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

    public findEventsBySkillAndTarget(skill: number, targetId: string) {
        console.log(skill);
        return new Promise( async (resolve, reject) => {
            await this.eventModel.find({allowingSkill: skill, target: targetId})
                .then((resBD) =>{
                    console.log(resBD);
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    private generateNumber (min: number, max: number){
        let rand = min + Math.random() * (max + 1);
        return(Math.floor(rand))
    }


    public getNextEvent(stateGame: IStateGame) {
        return new Promise(async (resolve, reject) => {
            try {
                // @ts-ignore
                const currentEvent: IEvent = await this.getEventById(stateGame.currentEventId);
                const playerService = new PlayerService(playerSchema);
                if (stateGame.choice){
                    playerService.changePlayerValue(stateGame.idPlayer,currentEvent.up);
                } else {
                    playerService.changePlayerValue(stateGame.idPlayer,currentEvent.down);
                }
                
                
                const player = await playerService.getPlayerById(stateGame.idPlayer)
                // @ts-ignore
                console.log(player.target);
                // @ts-ignore
                const availableEvents: [IEvent] = await this.findEventsBySkillAndTarget(Math.floor(player.skillValue), player.target);
                console.log(availableEvents);
                resolve(availableEvents[this.generateNumber(0, availableEvents.length)]);
            } catch (err) {
                reject(err)
            }
        })
    }
}
