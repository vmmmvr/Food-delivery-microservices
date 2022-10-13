import { Controller, Get } from '@nestjs/common';
import { FoodsService } from './foods.service';

@Controller()
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Get()
  getHello(): string {
    return this.foodsService.getHello();
  }
}
