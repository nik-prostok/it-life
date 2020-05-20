import {Document, model, Model, Schema} from 'mongoose';
import {ITarget} from "./TargetModel";

export interface ChangeValue extends Document {
    healthValue: number,
    timeValue: number,
    moneyValue: number,
    skillValue: number
}

export interface IEvent extends Document {
    textEvent: string,
    up:ChangeValue,
    down:ChangeValue,
    allowingSkill: number,
    textUp: string,
    textDown: string,
    target: ITarget['_id'],
}

export const eventSchema: Schema = new Schema({
    textEvent: {
        type: String,
        required: true,
    },
    allowingSkill: {
        type: Number,
        required: true,
    },
    textUp: {
        type: String,
        required: true,
    },
    textDown: {
        type: String,
        required: true,
    },
    target: {
        type: Schema.Types.ObjectId,
        ref: 'Target'
    },
    up:{
        healthValue: {
            type: Number,
            required: true,
            min: -10,
            max: 10,
        },
        timeValue: {
            type: Number,
            required: true,
            min: -10,
            max: 10,
        },
        moneyValue: {
            type: Number,
            required: true,
            min: -10,
            max: 10,
        },
        skillValue: {
            type: Number,
            required: true,
            min: -10,
            max: 10,
        },
    },

    down:{
        healthValue: {
            type: Number,
            required: true,
            min: -10,
            max: 10,
        },
        timeValue: {
            type: Number,
            required: true,
            min: -10,
            max: 10,
        },
        moneyValue: {
            type: Number,
            required: true,
            min: -10,
            max: 10,
        },
        skillValue: {
            type: Number,
            required: true,
            min: -10,
            max: 10,
        },
    },
});

// export const eventModel: Model<IEvent> = model<IEvent>('Event', eventSchema);
