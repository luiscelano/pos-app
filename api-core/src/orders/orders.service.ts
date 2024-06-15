import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import MapperDecorator from 'src/decorators/mapper.decorator';
import { GetOrdersResponseDto } from 'src/dtos/get-orders-response.dto';
import { OrderItemsDto } from 'src/dtos/order-items.dto';
import { PlaceOrderInputDto } from 'src/dtos/place-order-input.dto';
import { PlaceOrderResponseDto } from 'src/dtos/place-order-response.dto';
import { Counter } from 'src/schemas/counter.schema';
import { Order, OrderStatus } from 'src/schemas/order.schema';
import { Product } from 'src/schemas/product.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Product.name) private productsModel: Model<Product>,
    @InjectModel(Order.name) private ordersModel: Model<Product>,
    @InjectModel(Counter.name) private counterModel: Model<Counter>,
  ) {}

  @MapperDecorator(GetOrdersResponseDto)
  async getOrders() {
    const result = await this.ordersModel
      .find(null, null, { sort: { createdAt: -1 } })
      .exec();

    return result.map((item) => ({ ...item.toJSON(), _id: item.id }));
  }

  @MapperDecorator(PlaceOrderResponseDto)
  async placeOrder(input: PlaceOrderInputDto) {
    const products = [];

    for (const item of input.items) {
      const product = await this.productsModel.findById(item.productId).exec();
      products.push({
        ...product.toJSON(),
        _id: product.id,
        quantity: item.quantity,
      });
    }
    const transformedProducts = plainToInstance(OrderItemsDto, products, {
      excludeExtraneousValues: true,
    });

    const orderTotal = products.reduce(
      (sum, current) => sum + current.price * current.quantity,
      0,
    );
    const totalItemQuantity = products.reduce(
      (sum, current) => sum + current.quantity,
      0,
    );
    const orderNumber = (await this.getOrderSequence())?.counter;
    const body = {
      orderNumber,
      items: transformedProducts,
      orderTotal,
      totalItemQuantity,
      status: OrderStatus.Pending,
      createdAt: Date.now(),
    };
    const createdOrder = new this.ordersModel(body);
    const createdOrderResponse = await createdOrder.save();
    return { ...createdOrderResponse.toJSON(), _id: createdOrderResponse.id };
  }

  private getOrderSequence(): Promise<any> {
    return this.counterModel
      .findOneAndUpdate(
        { collection: 'orders' },
        {
          $inc: { counter: 1 },
        },
        {
          returnOriginal: false,
        },
      )
      .exec();
  }
}
