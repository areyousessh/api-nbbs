import { Router } from "express";
import { CreateGroupController } from "../controllers/createGroupController";
import { CreateUserController, LoginController } from "../controllers/createUserController";

const authRouter = Router()
const groupController = new CreateGroupController()
const userController = new CreateUserController()
const loginController = new LoginController()

authRouter.post ('/create-group', groupController.handle)
authRouter.post ('/create-user', userController.handle)
authRouter.post ('/login', loginController.handle)


export {authRouter}
