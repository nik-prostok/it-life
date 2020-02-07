import { ICategoryEvent } from '../models/CategoryModel';
import { category as CategoryModel } from '../models/CategoryModel';
import {DocumentQuery} from 'mongoose';
import {Logger} from '@overnightjs/logger';

export class CategoryService {

    public static getAllCategory(): DocumentQuery<ICategoryEvent[], ICategoryEvent> & {} {
        return CategoryModel.find();
    };

    public static createCategory(newCategory: ICategoryEvent): Promise<ICategoryEvent> {
        return CategoryModel.create(newCategory);
    }
}
