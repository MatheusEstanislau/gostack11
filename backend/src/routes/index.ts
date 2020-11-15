import { Router } from 'express'
import appointmentRouter from './appointment.routes'

import userRoutes from './user.routes'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/appointment', appointmentRouter)

export default routes
