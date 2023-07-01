import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import { Schedules } from "@prisma/client";

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

export class getScheduleByIdController {
    async handle (req: Request, res: Response) {
        const {id_schedule} = req.params

        try {
            const schedule = await prismaClient.schedules.findUnique({
                where: {id: id_schedule}
            })
        if (schedule) {
            res.status(200).json(schedule)
         } 
        else {
            res.status(404).json({
                error: 'Agendamento não encontrado'
            })
         }
        } catch (e: any) {
            console.log(e)
            res.status(500).json({
                e: 'Erro interno do servidor'
            })
        }
     }
}

export class getSchedulesController {
    async handle (req: Request, res: Response) {
        try {
            const schedules = prismaClient.schedules.findMany()
            res.status(200).json(schedules)
        } catch (e: any) {
            console.log(e)
            res.status(500).json({
                e: 'Erro interno do servidor'
            })
        }
    }
}