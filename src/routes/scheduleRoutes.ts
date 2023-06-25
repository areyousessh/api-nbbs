import { Router } from "express";
import { CreateScheduleController } from "../controllers/createScheduleController";


const scheduleRouter = Router()
const scheduleController = new CreateScheduleController()

scheduleRouter.post('/create-schedule', scheduleController.handle)


export {scheduleRouter}