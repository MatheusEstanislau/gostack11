import { getRepository } from 'typeorm'
import User from '../models/user'
import { hash } from 'bcryptjs'

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

    const hashedPassword = await hash(password, 8)

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
    })

    await userRepository.save(user)

    return user
  }
}
