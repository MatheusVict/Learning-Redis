import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';
import { User } from 'src/entities/user.entity';
import { RedisService } from 'src/config/redis';
import { PrismaService } from 'src/config/prism.config';

@Injectable()
export class RedisUserRepository implements UserRepository {
  constructor(
    private readonly redis: RedisService,
    private readonly prisma: PrismaService,
  ) {}
  async findMany(): Promise<User[]> {
    const cacheUsers = await this.redis.get('users');

    if (!cacheUsers) {
      const users = await this.prisma.user.findMany();

      await this.redis.set('users', JSON.stringify(users), 'EX', 60);

      console.log('\x1b[33m%s\x1b[0m', 'from database');

      return users;
    }

    console.log('\x1b[33m%s\x1b[0m', 'from cache');

    return JSON.parse(cacheUsers);
  }
}
