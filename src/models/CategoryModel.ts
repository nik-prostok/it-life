import {Document, Schema, Model, model} from 'mongoose';
import EventInterface from './interfaces/EventInterface';

export interface ICategoryEvent extends Document {
    nameCategory: string,
    events: [
        EventInterface['_id']
    ],
}

const categoryEventSchema: Schema = new Schema({
    nameCategory: {
        type: String,
        required: true,
        unique: true,
    },
    events: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }]
});

export const category: Model<ICategoryEvent> = model<ICategoryEvent>('CategoryEvent', categoryEventSchema);
