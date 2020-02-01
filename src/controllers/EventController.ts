import { Request, Response } from 'express';
import { Controller, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { eventSchema } from "../models/EventModel";
import EventInterface from "../models/interfaces/EventInterface";
import { EventService } from '../services/EventService';

@Controller('event')
export class EventController {

    private eventService: EventService;

    constructor() {
        this.eventService = new EventService(eventSchema);
    }

    @Get()
    private async getEvents(req: Request, res: Response) {
        await this.eventService.getAllEvents()
            .then((events) => {
                res.status(200).send(events);
            })
            .catch((err) => {
                Logger.Err(err);
                res.status(400).send(err);
            })
    }

    @Post()
    private async addEvent(req: Request, res: Response) {
        // console.log(req.body)
        await this.eventService.createEvent(req.body)
            .then((createdEvent) => {
                res.status(200).send(createdEvent);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).send(err);
            })
    }
}
