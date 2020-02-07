import { Request, Response } from 'express';
import { Controller, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import {CategoryService} from '../services/CategoryService';

@Controller('category')
export class CategoryController {

    @Get()
    private async getCategories(req: Request, res: Response) {
        await CategoryService.getAllCategory()
            .then((categories) => {
                res.status(200).send(categories);
            })
            .catch(err => {
                Logger.Err(err);
                res.status(400).send(err);
            })
    }

    @Post()
    private async addCategory(req: Request, res: Response) {
        await CategoryService.createCategory(req.body)
            .then(createdCategory => {
                console.log(createdCategory);
                res.status(200).send(createdCategory);
            })
            .catch(err => {
                console.log(err);
                res.status(400).send(err);
            })
    }
}
