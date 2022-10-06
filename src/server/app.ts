import express, { application } from 'express'
import morgan from 'morgan'
import userRoutes from "./routes/user.routes"

const app=express()

app.use(morgan('dev'))
app.use(express.json())
app.use(userRoutes)

export default app