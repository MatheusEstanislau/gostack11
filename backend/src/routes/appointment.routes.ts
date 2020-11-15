import { Router, Request, Response } from 'express'
import CreateAppointmentsService from '../services/createAppoitmentService'

const appointmentRouter = Router()

appointmentRouter.post('/', async (request: Request, response: Response) => {
  try {
    const { provider, date } = request.body

    const createAppointment = new CreateAppointmentsService()

    const appointment = await createAppointment.execute({
      provider,
      date,
    })

    return response.json({
      appointment: appointment.provider_id,
      date: appointment.date,
    })
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default appointmentRouter
