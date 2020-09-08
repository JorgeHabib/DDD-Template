import User from '@modules/users/infra/inMemory/entities/User';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  create(data: ICreateUserDTO): Promise<User>;
  save(data: User): Promise<User>;
}

export default IUsersRepository;
