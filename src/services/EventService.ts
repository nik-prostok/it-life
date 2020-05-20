import {IEvent, ChangeValue} from '../models/EventModel';
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
        let rand = min + Math.random() * (max);
        return(Math.floor(rand))
    }
    private finalyValue(values: ChangeValue,player:IPlayer){
        let finalyValues = {
            healthValue: 0,
            timeValue: 0,
            moneyValue: 0,
            skillValue: 0,
        };
        finalyValues.healthValue = values.healthValue + player.healthValue;
        finalyValues.timeValue = values.timeValue + player.timeValue;
        finalyValues.moneyValue = values.moneyValue + player.moneyValue;
        finalyValues.skillValue = values.skillValue + player.skillValue;
        return finalyValues;
    }


    public getNextEvent(stateGame: IStateGame) {
        return new Promise(async (resolve, reject) => {
            try {
                // @ts-ignore
                const currentEvent: IEvent = await this.getEventById(stateGame.currentEventId);
                const playerService = new PlayerService(playerSchema);
                // @ts-ignore

                const player: IPlayer = await playerService.getPlayerById(stateGame.idPlayer);
                if (stateGame.choice){
                    // @ts-ignore

                    let valuesUpdate: ChangeValue = this.finalyValue(currentEvent.up,player);
                    playerService.changePlayerValue(stateGame.idPlayer, valuesUpdate);
                } else {
                    // @ts-ignore
                    let valuesUpdate: ChangeValue =this.finalyValue(currentEvent.down,player);
                    playerService.changePlayerValue(stateGame.idPlayer, valuesUpdate);
                }
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
