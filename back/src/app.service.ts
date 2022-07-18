import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Desenvolvimento back-end, criando e consumindo APIs! Portfólio @ninja7k - since 1998 - !@!@';
  }
}
