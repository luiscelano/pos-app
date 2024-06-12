import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { PlaceOrderInputDto } from 'src/dtos/place-order-input.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('/')
  getOrders() {
    return this.ordersService.getOrders();
  }

  @Post('/')
  placeOrder(@Body() body: PlaceOrderInputDto) {
    return this.ordersService.placeOrder(body);
  }
}
