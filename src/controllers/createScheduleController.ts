import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateScheduleController {
    async handle (req: Request, res: Response) {
        const {barberName, date, id_user} = req.body
        const schedule = await prismaClient.scheduleUsers.create({
            data: {
                schedule: {
                    create: {
                        barberName,
                        date,
                    }
                },
                user: {
                    connect: {
                        id: id_user
                    }
                }
            }
        })
        res.json(schedule)
    }
}