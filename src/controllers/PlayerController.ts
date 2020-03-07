import { Request, Response } from 'express';
import { Controller, Get, Put, Post, Delete } from '@overnightjs/core';
import {PlayerService} from '../services/PlayerService';
import {playerSchema} from "../models/PlayerModel";

@Controller('player')
export class PlayerController {

    private playerService: PlayerService;

    constructor() {
        this.playerService = new PlayerService(playerSchema);
    }

    @Get()
    private async getPlayer(req: Request, res: Response) {
        await this.playerService.getAllPlayer()
            .then((player) => {
                res.status(200).send(player);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }

    @Post()
    private async addPlayer(req: Request, res: Response) {
        await this.playerService.createPlayer(req.body)
            .then(createdPlayer => {
                res.status(200).send(createdPlayer);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }
}
