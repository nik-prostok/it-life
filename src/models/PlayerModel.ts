import {Document, model, Model, Schema} from 'mongoose';
import {ITarget} from "./TargetModel";
enum GameDifficulty{
    SchoolBoy,
    Student,
    Adult
}

export interface IPlayer extends Document {
    namePlayer: string,
    male: boolean,
    difficult: GameDifficulty,
    target: ITarget['_id'],
    healthValue: number,
    timeValue: number,
    moneyValue: number,
    skillValue: number,
}

export const playerSchema: Schema = new Schema({
    namePlayer: {
        type: String,
        required: true,
    },
    male:{
        type: Boolean,
        required: true,
    },
    difficult: {
        type: GameDifficulty,
        required: true, 
    },
    target: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Target',
    },
    skillValue: {
        type: Number,
        required: true,
        min: 0,
        max: 10,
    },
    moneyValue: {
        type: Number,
        required: true,
        min: 0,
        max: 10,
    },
    timeValue: {
        type: Number,
        required: true,
        min: 0,
        max: 10,
    },
    healthValue: {
        type: Number,
        required: true,
        min: 0,
        max: 10,
    },

})