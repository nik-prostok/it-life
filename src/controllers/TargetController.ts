import { Request, Response } from 'express';
import { Controller, Get, Put, Post, Delete } from '@overnightjs/core';
import {TargetService} from '../services/TargetService';
import {targetSchema} from "../models/TargetModel";

@Controller('target')
export class TargetController {

    private targetService: TargetService;

    constructor() {
        this.targetService = new TargetService(targetSchema );
    }

    @Get()
    private async getTargets(req: Request, res: Response) {
        await this.targetService.getAllTarget()
            .then((target) => {
                res.status(200).send(target);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }

    @Post()
    private async addTarget(req: Request, res: Response) {
        await this.targetService.createTarget(req.body)
            .then(createdTarget => {
                res.status(200).send(createdTarget);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }
}
