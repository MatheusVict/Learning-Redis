import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService extends Redis {
  constructor() {
    super();

    super.on('error', (error) => {
      console.log('Erro ao conectar no Redis');
      console.log(error);
      process.exit(1);
    });

    super.on('connect', () => {
      console.log('Conectado no Redis');
    });
  }
}
