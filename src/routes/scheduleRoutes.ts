import { Router } from "express";
import { CreateAvailableSchedulesController, CreateScheduleController, GetAvailableSchedulesController, GetScheduleByIdController, GetSchedulesController } from "../controllers/createScheduleController";


const scheduleRouter = Router()
const scheduleController = new CreateScheduleController()
const getAllSchedulesController = new GetSchedulesController()
const getScheduleByIdController = new GetScheduleByIdController()
const createAvailableSchedulesController = new CreateAvailableSchedulesController()
const getAvailableSchedulesController = new GetAvailableSchedulesController()


scheduleRouter.post('/create-schedule', scheduleController.handle)
scheduleRouter.get('/schedules', getAllSchedulesController.handle)
scheduleRouter.get('/schedule/:id', getScheduleByIdController.handle)
scheduleRouter.post('/available-schedules', createAvailableSchedulesController.handle)
scheduleRouter.get('/available-schedules', getAvailableSchedulesController.handle)



export {scheduleRouter}