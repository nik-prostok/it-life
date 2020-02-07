import { Request, Response } from 'express';
import { Controller, Get, Put, Post, Delete } from '@overnightjs/core';
import {CategoryService} from '../services/CategoryService';
import {categoryEventSchema} from "../models/CategoryModel";

@Controller('category')
export class CategoryController {

    private categoryService: CategoryService;

    constructor() {
        this.categoryService = new CategoryService(categoryEventSchema );
    }

    @Get()
    private async getCategories(req: Request, res: Response) {
        await this.categoryService.getAllCategory()
            .then((categories) => {
                res.status(200).send(categories);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }

    @Post()
    private async addCategory(req: Request, res: Response) {
        await this.categoryService.createCategory(req.body)
            .then(createdCategory => {
                res.status(200).send(createdCategory);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }
}
