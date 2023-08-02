import { Router } from "express";
import { CreateGroupController } from "../controllers/createGroupController";
import { CreateUserController, GetUserByIdController, LoginController } from "../controllers/createUserController";

const authRouter = Router()
const groupController = new CreateGroupController()
const userController = new CreateUserController()
const loginController = new LoginController()
const getUserbyIdController = new GetUserByIdController()

authRouter.post ('/create-group', groupController.handle)
authRouter.post ('/create-user', userController.handle)
authRouter.post ('/login', loginController.handle)
authRouter.get ('/user/:id', getUserbyIdController.handle)



export {authRouter}
