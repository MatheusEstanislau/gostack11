import { Router } from 'express'
import appointmentRouter from './appointment.routes'
import sessionRoutes from './session.routes'

import userRoutes from './user.routes'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/appointment', appointmentRouter)
routes.use('/session', sessionRoutes)

export default routes
