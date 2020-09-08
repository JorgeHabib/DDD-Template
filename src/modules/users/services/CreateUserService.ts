import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/inMemory/entities/User';

interface IRequest {
  name: string;
  email: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute({ name, email }: IRequest): Promise<User> {
    const emailInvalid = await this.usersRepository.findByEmail(email);

    if (emailInvalid) {
      throw new Error('Invalid Email.');
    }

    const id = String(Math.floor(Math.random() * 10000));

    const user = await this.usersRepository.create({
      name,
      email,
      id,
    });

    return user;
  }
}

export default CreateUserService;
