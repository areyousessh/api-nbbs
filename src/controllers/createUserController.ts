import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";


export class CreateUserController {
    async handle (req: Request, res: Response) {
        const {name, email, cellphone, password, id_group} = req.body;
        const user = await prismaClient.groupUsers.create({
            data: {
                user: {
                  create: {
                    name,
                    email,
                    cellphone,
                    password
                  } 
                },
                group: {
                    connect: {
                        id: id_group
                    }
                }
            }
        })
        res.json(user);
    }
}