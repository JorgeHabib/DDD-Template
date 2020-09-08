import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private users: User[];

  constructor() {
    this.users = [] as User[];
  }

  public async create({ email, name, id }: ICreateUserDTO): Promise<User> {
    const user = new User(id, name, email);

    this.users.push(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    const userIndex = this.users.findIndex((userCompare) => userCompare.id === user.id);

    this.users[userIndex] = user;

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const userIndex = this.users.findIndex((userCompare) => userCompare.email === email);

    if (userIndex < 0) {
      return undefined;
    }

    return this.users[userIndex];
  }

  public async findById(id: string): Promise<User | undefined> {
    const userIndex = this.users.findIndex((userCompare) => userCompare.id === id);

    if (userIndex < 0) {
      return undefined;
    }

    return this.users[userIndex];
  }

  public async findAll(): Promise<User[]> {
    return this.users;
  }
}

export default UsersRepository;
