import { Router } from "express";
import { CreateScheduleController, getScheduleByIdController, getSchedulesController } from "../controllers/createScheduleController";


const scheduleRouter = Router()
const scheduleController = new CreateScheduleController()
const getScheduleController = new getScheduleByIdController()
const getAllSchedulesController = new getSchedulesController()

scheduleRouter.post('/create-schedule', scheduleController.handle)
scheduleRouter.get('/schedules/:id', getScheduleController.handle)
scheduleRouter.get('/schedules', getAllSchedulesController.handle)


export {scheduleRouter}