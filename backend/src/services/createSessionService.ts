import { getRepository } from 'typeorm'
import User from '../models/user'
import { compare } from 'bcryptjs'

interface Data {
  email: string
  password: string
}

interface Response {
  user: User
}

export default class CreateSessionService {
  public async execute({ email, password }: Data): Promise<Response> {
    const userRepository = getRepository(User)

    const user = await userRepository.findOne({
      where: { email },
    })

    if (!user) {
      throw new Error('Email or password invalids')
    }

    const correctPassword = await compare(password, user.password)

    if (!correctPassword) {
      throw new Error('Email or password invalids')
    }

    return {
      user,
    }
  }
}
