import {Document, Schema, Model, model} from 'mongoose';
import {IEvent} from "./EventModel";

export interface ICategoryEvent extends Document {
    nameCategory: string,
    allowingSkill: number
}

export const categoryEventSchema: Schema = new Schema({
    nameCategory: {
        type: String,
        required: true,
    },
    allowingSkill: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    }
});

// export const categoryModel: Model<ICategoryEvent> = model<ICategoryEvent>('CategoryEvent', categoryEventSchema);
