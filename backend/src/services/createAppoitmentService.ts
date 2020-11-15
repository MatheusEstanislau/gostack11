import { getRepository } from 'typeorm'
import Appointments from '../models/appointments'

interface Request {
  provider: string
  date: Date
}

export default class CreateAppointmentsService {
  public async execute({ provider, date }: Request): Promise<Appointments> {
    const appointmentRepository = getRepository(Appointments)

    console.log(date)
    const appointment = appointmentRepository.create({
      provider_id: provider,
      date,
    })

    await appointmentRepository.save(appointment)

    return appointment
  }
}
