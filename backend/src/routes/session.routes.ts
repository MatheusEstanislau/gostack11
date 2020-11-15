import { Router, Request, Response } from 'express'
import CreateSessionService from '../services/createSessionService'

const sessionRoutes = Router()

sessionRoutes.post('/', async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body

    const createSession = new CreateSessionService()
    const { user, token } = await createSession.execute({ email, password })
    return response.json({ id: user.id, email: user.email, token: token })
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default sessionRoutes
