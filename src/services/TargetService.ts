import { ITarget } from '../models/TargetModel';
import {Schema} from 'mongoose';
import * as mongoose from "mongoose";

export class TargetService {

    private targetModel: mongoose.Model<mongoose.Document>;


    constructor(targetSchema: Schema) {
        this.targetModel = mongoose.model<ITarget>('Target', targetSchema);
    }


    public getAllTarget() {
        return new Promise(async (resolve, reject) => {
            await this.targetModel.find()
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    };

    public getTargetById(id: string) {
        return new Promise(async (resolve, reject) => {
            await this.targetModel.findById(id)
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public createTarget(newTarget: ITarget): Promise<mongoose.Document> {
        return new Promise(async(resolve, reject) => {
            await this.targetModel.create(newTarget)
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}
