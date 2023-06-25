import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { authRouter } from './routes/authRoutes'
import { scheduleRouter } from './routes/scheduleRoutes'

// criando o app 
export const app = express()

// configuração dos middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/', authRouter)
app.use('/', scheduleRouter)