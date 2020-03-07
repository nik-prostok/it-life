import {Document, model, Model, Schema} from 'mongoose';
import {IEvent} from "./EventModel";

export interface ITarget extends Document {
    nameTarget: string
}

export const targetSchema: Schema = new Schema({
    nameTarget: {
        type: String,
        required: true,
    }
})