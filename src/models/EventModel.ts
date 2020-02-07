import {Document, model, Model, Schema} from 'mongoose';
import {ICategoryEvent} from "./CategoryModel";

export interface IEvent extends Document {
    nameEvent: string,
    healthChangeValue: number,
    timeChangeValue: number,
    moneyChangeValue: number,
    skillChangeValue: number,
    nextCategory: ICategoryEvent['_id'],
}

export const eventSchema: Schema = new Schema({
    nameEvent: {
        type: String,
        required: true,
    },
    nextCategory: {
        type: Schema.Types.ObjectId,
        ref: 'CategoryEvent'
    },
    healthChangeValue: {
        type: Number,
        required: true,
        min: -10,
        max: 10,
    },
    timeChangeValue: {
        type: Number,
        required: true,
        min: -10,
        max: 10,
    },
    moneyChangeValue: {
        type: Number,
        required: true,
        min: -10,
        max: 10,
    },
    skillChangeValue: {
        type: Number,
        required: true,
        min: -10,
        max: 10,
    },
});

// export const eventModel: Model<IEvent> = model<IEvent>('Event', eventSchema);
