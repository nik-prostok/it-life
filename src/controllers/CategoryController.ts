import { Request, Response } from 'express';
import { Controller, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import {CategoryService} from '../services/CategoryService';

@Controller('category')
export class CategoryController {

    /*@Get()
    private async getMessage(req: Request, res: Response) {
        await CategoryService.getAllCategory()
            .then((categories) => {
                res.status(200).send(categories);
            })
            .catch(err => {
                Logger.Err(err);
                res.status(400).send(err);
            })
    }*/

    @Post()
    private async postMessage(req: Request, res: Response) {
        await CategoryService.createCategory(req.body.newCategory)
            .then(createdCategory => {
                console.log(createdCategory);
                res.status(200).send(createdCategory);
            })
            .catch(err => {
                console.log(err);
                res.status(400).send(err);
            })
    }

    @Put(':msg')
    private putMessage(req: Request, res: Response) {
        Logger.Info(req.params.msg);
        return res.status(400).json({
            error: req.params.msg,
        });
    }

    @Delete(':msg')
    private delMessage(req: Request, res: Response) {
        try {
            throw new Error(req.params.msg);
        } catch (err) {
            Logger.Err(err, true);
            return res.status(400).json({
                error: req.params.msg,
            });
        }
    }
}
