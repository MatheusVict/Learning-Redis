import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './config/prism.config';
import { UserRepository } from './repositories/user.repository';
import { PrismaUserRepository } from './repositories/prisma/prisma-user-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class AppModule {}
