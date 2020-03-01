import {Document, model, Model, Schema} from 'mongoose';
import {ICategoryEvent} from "./CategoryModel";

export interface ITarget extends Document {
    nameTarget: string,
    availableCategory: [ICategoryEvent['_id']]
}

export const targetSchema: Schema = new Schema({
    nameTarget: {
        type: String,
        required: true,
    },
    availableCategory: [{
        type: Schema.Types.ObjectId,
        ref: 'CategoryEvent'
    }],
})