import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { OrdersController } from './orders/orders.controller';
import { ProductsController } from './products/products.controller';
import { OrdersService } from './orders/orders.service';
import { ProductsService } from './products/products.service';

@Module({
  imports: [ProductsModule, OrdersModule],
  controllers: [OrdersController, ProductsController],
  providers: [OrdersService, ProductsService],
})
export class AppModule {}
