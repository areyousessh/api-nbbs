import { Router } from "express";
import { CreateScheduleController, GetScheduleByIdController, GetSchedulesController } from "../controllers/createScheduleController";


const scheduleRouter = Router()
const scheduleController = new CreateScheduleController()
const getAllSchedulesController = new GetSchedulesController()
const getScheduleByIdController = new GetScheduleByIdController()


scheduleRouter.post('/create-schedule', scheduleController.handle)
scheduleRouter.get('/schedules', getAllSchedulesController.handle)
scheduleRouter.get('/schedule/:id', getScheduleByIdController.handle)



export {scheduleRouter}