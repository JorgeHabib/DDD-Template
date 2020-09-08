import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/inMemory/entities/User';

@injectable()
class ListUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute(): Promise<User[]> {
    const users = this.usersRepository.findAll();

    return users;
  }
}

export default ListUsersService;
