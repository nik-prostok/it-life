import {Document, Schema, Model, model} from 'mongoose';
import {IEvent} from "./EventModel";

export interface ICategoryEvent extends Document {
    nameCategory: string,
    badEvents: [
        IEvent['_id']
    ],
    goodEvents: [
        IEvent['_id']
    ],
}

export const categoryEventSchema: Schema = new Schema({
    nameCategory: {
        type: String,
        required: true,
    },
    badEvents: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }],
    goodEvents: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }]
});

// export const categoryModel: Model<ICategoryEvent> = model<ICategoryEvent>('CategoryEvent', categoryEventSchema);
