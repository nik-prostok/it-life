import { IPlayer } from '../models/PlayerModel';
import {Schema} from 'mongoose';
import * as mongoose from "mongoose";

export class PlayerService {

    private playerModel: mongoose.Model<mongoose.Document>;


    constructor(playerSchema: Schema) {
        this.playerModel = mongoose.model<IPlayer>('IPlayer', playerSchema);
    }


    public getAllPlayer() {
        return new Promise(async (resolve, reject) => {
            await this.playerModel.find()
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    };

    public getPlayerById(id: string) {
        return new Promise(async (resolve, reject) => {
            await this.playerModel.findById(id)
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public createPlayer(newPlayer: IPlayer): Promise<mongoose.Document> {
        return new Promise(async(resolve, reject) => {
            await this.playerModel.create(newPlayer)
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}
