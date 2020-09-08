import { container } from 'tsyringe';

import '@shared/container/provider';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/inMemory/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
