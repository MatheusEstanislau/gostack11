import { getRepository } from 'typeorm'
import User from '../models/user'

interface Request {
  name: string
  email: string
  password: string
}

export default class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User)

    const userExits = await userRepository.findOne({
      where: { email },
    })

    console.log(userExits)

    if (userExits) {
      throw new Error('Email already used')
    }

    const user = userRepository.create({
      name,
      email,
      password,
    })

    await userRepository.save(user)

    return user
  }
}
