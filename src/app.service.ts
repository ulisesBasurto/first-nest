import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World bby!';
  }
  getOtherMessage(): string {
    return 'Qué onda nena!';
  }
}
