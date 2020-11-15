import { getRepository } from 'typeorm'
import User from '../models/user'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface Data {
  email: string
  password: string
}

interface Response {
  user: User
  token?: string
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

    const token = sign({}, '1fb617d1fda85e14f94dcbca2ed88b08', {
      subject: user.id,
      expiresIn: '7d',
    })

    return {
      user,
      token,
    }
  }
}
