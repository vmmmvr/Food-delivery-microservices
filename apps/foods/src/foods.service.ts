import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodsService {
  getHello(): string {
    return 'Hello World!';
  }
}
