import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateGroupController {
    async handle(req: Request, res: Response) {
        const {name} = req.body
        const group = await prismaClient.group.create({
            data: {
                name
            }
        })
        return res.json(group)
    }
}