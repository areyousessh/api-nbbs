import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";


export class CreateScheduleController {
    async handle (req: Request, res: Response) {
        try {
            const {clientName, barberName, date, id_user} = req.body
            const schedule = await prismaClient.scheduleUsers.create({
                data: {
                    schedule: {
                        create: {
                            clientName,
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
        } catch (e: any) {
            console.log(e)
            res.status(500).json({
                e: 'Erro interno no servidor'
            })
        }
    }
}

export class GetSchedulesController {
    async handle (req: Request, res: Response) {
        try {
            const schedules = await prismaClient.schedules.findMany();
            res.json(schedules)
        } catch (e: any) {
            console.log(e)
            res.status(500).json({
                e: 'Erro ao buscar os agendamentos'
            })
        }
    }
}

export class GetScheduleByIdController {
    async handle (req: Request, res: Response) {
        try {
            const {id} = req.params
            const schedule = await prismaClient.schedules.findUnique({
                where: {id: parseInt(id)}
            });
        if (!schedule) {
            return res.status(404).json({
                message: 'Agendamento não encontrado.'
            })
        }
        return res.json(schedule);
        } catch (e: any) {
            console.log(e);
            return res.status(500).json({
                message: 'Erro ao buscar o agendamento.'
            })
        }
    }
}
