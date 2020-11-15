import { Router, Request, Response } from 'express'
import CreateUserService from '../services/createUserService'

const userRouter = Router()

userRouter.post('/', async (request: Request, response: Response) => {
  try {
    const { name, email, password } = request.body

    const createUser = new CreateUserService()

    const user = await createUser.execute({
      name,
      email,
      password,
    })

    return response.json({ user: user.name, email: user.email })
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default userRouter
