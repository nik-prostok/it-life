import {Document} from "mongoose";

export default interface EventInterface extends Document {
    nameEvent: string,
    healthChangeValue: number,
    timeChangeValue: number,
    moneyChangeValue: number,
    skillChangeValue: number,
}
