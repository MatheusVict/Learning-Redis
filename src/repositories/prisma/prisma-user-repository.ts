import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';
import { PrismaService } from 'src/config/prism.config';
import { User } from 'src/entities/user.entity';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }
}
