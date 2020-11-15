import { Router, Request, Response } from 'express'
import CreateSessionService from '../services/createSessionService'

const sessionRoutes = Router()

sessionRoutes.post('/', async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body

    const createSession = new CreateSessionService()
    const { user } = await createSession.execute({ email, password })
    return response.json({ id: user.id, email: user.email })
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default sessionRoutes
