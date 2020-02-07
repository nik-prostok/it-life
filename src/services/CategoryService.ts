import { ICategoryEvent } from '../models/CategoryModel';
import {Schema} from 'mongoose';
import * as mongoose from "mongoose";

export class CategoryService {

    private categoryModel: mongoose.Model<mongoose.Document>;


    constructor(categoryEventSchema: Schema) {
        this.categoryModel = mongoose.model<ICategoryEvent>('CategoryEvent', categoryEventSchema);
    }


    public getAllCategory() {
        return new Promise(async (resolve, reject) => {
            await this.categoryModel.find()
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    };

    public getCategoryById(id: string) {
        return new Promise(async (resolve, reject) => {
            await this.categoryModel.findById(id)
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public createCategory(newCategory: ICategoryEvent): Promise<mongoose.Document> {
        return new Promise(async(resolve, reject) => {
            await this.categoryModel.create(newCategory)
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}
