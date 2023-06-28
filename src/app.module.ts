import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './config/prism.config';
import { UserRepository } from './repositories/user.repository';
import { PrismaUserRepository } from './repositories/prisma/prisma-user-repository';
import { RedisUserRepository } from './repositories/cahce/redis-user-repository';
import { RedisService } from './config/redis';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    RedisService,
    {
      provide: UserRepository,
      useClass: RedisUserRepository,
    },
  ],
})
export class AppModule {}
