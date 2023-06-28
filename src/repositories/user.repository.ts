import { User } from 'src/entities/user.entity';

export abstract class UserRepository {
  abstract findMany(): Promise<User[]>;
}
