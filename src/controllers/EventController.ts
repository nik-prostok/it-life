import { Request, Response } from 'express';
import { Controller, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { eventSchema } from '../models/EventModel';
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
                res.status(400).send(err);
            })
    }

    @Post()
    private async addEvent(req: Request, res: Response) {
        await this.eventService.createEvent(req.body)
            .then((createdEvent) => {
                res.status(200).send(createdEvent);
            })
            .catch((err) => {
                res.status(400).send(err);
            })
    }

    @Post('next')
    private async getNextEvent(req: Request, res: Response) {
        await this.eventService.getNextEvent(req.body)
            .then((nextEvent) => {
                res.status(200).send(nextEvent);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }
}
