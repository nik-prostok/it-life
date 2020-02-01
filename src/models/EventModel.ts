import { Schema } from 'mongoose';

export const eventSchema: Schema = new Schema({
    nameEvent: {
        type: String,
        required: true,
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
