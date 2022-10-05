import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDTO } from './dto/order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

 @Post('create')
 async createOrder(@Body() dto: CreateOrderDTO) {
  return this.ordersService.createOrder(dto);
 }


 @Get('all')
 async getAllOrder() {
  return this.ordersService.getAllOrder();
 }
}
