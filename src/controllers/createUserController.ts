import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const jwttoken = process.env.JWT_KEY
export class CreateUserController {
    async handle (req: Request, res: Response) {
        try {

        const {name, email, cellphone, password, id_group} = req.body;
        const existingUser = await prismaClient.users.findUnique({where: {email}});
        if (existingUser) {
            return res.status(409).json({
                error: 'Usuario já existe'
            })
         }
         const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prismaClient.groupUsers.create({
            data: {
                user: {
                  create: {
                    name,
                    email,
                    cellphone,
                    password: hashedPassword
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
    } catch (e: any) {
        console.log('Erro durante a criação do usuário', e)
        return res.status(500).json({
            e: 'Erro interno do servidor'
        })
    }
    }
}

export class LoginController {
    async handle (req: Request, res: Response) {
        try {
            const {email, password} = req.body;

            const user = await prismaClient.users.findUnique({where: {email}});
            if (!user) {
                return res.status(401).json({
                    error: 'Usuário não encontrado'
                })
            }
            const hashedPassword = await bcrypt.compare(password, user.password);
            if (!hashedPassword) {
                return res.status(401).json({
                    error: 'Credenciais invalidas'
                })
            }
            const token = jwt.sign({userId: user.id}, jwttoken!, {expiresIn: 1800000 })

            return res.json({token})
            
        } catch (e: any) {
            console.log('Erro durante o login:', e)
            return res.status(500).json({
                error: 'Erro interno do servidor'
            })
        }
    }
}

export class GetUserByIdController {
    async handle (req: Request, res: Response) {
        const {id} = req.params
        try {
            const user = await prismaClient.users.findUnique(
                {where: 
                    {id: parseInt(id)},
                });
                if (!user) {
                    return res.status(404).json({error: 'Usuário não encontrado'})
                }
                res.status(200).json(user)
        } catch (e: any) {
            console.log(e)
            res.status(500).json({
                e: 'Erro interno do servidor'
            })
        }
    }
}
