import { Router } from "express";
import { CreateGroupController } from "../controllers/createGroupController";
import { CreateUserController } from "../controllers/createUserController";

const authRouter = Router()
const groupController = new CreateGroupController()
const userController = new CreateUserController()

authRouter.post ('/create-group', groupController.handle)
authRouter.post ('/create-user', userController.handle)


export {authRouter}
