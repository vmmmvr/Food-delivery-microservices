import { Injectable } from '@nestjs/common';
import { CreateOrderDTO } from './dto/order.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
    private readonly orderRepository: OrdersRepository

    constructor(orderRepository: OrdersRepository) {
      this.orderRepository = orderRepository
    }
    async createOrder(dto: CreateOrderDTO) {  

      return this.orderRepository.create(dto);

    }
    async getAllOrder( ) {  

      return this.orderRepository.find({});

    }
}
