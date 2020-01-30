import {ICategory} from '../../models/CategoryModel';
import { category as CategoryModel } from '../../models/CategoryModel';
import {DocumentQuery} from 'mongoose';
import {Logger} from '@overnightjs/logger';

export class CategoryService {

    public static getAllCategory(): DocumentQuery<ICategory[], ICategory> & {} {
        return CategoryModel.find();
    };

    public static createCategory(newCategory: ICategory): Promise<ICategory> {
        // console.log(newCategory);
        return CategoryModel.create(newCategory);
    }
}
