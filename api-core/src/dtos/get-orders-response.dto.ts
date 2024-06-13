import { Expose, Transform, plainToInstance } from 'class-transformer';
import { OrderItemDto } from './place-order-response.dto';
import { Order } from 'src/schemas/order.schema';

export class GetOrdersResponseDto implements Order {
  @Expose({ name: '_id' })
  orderId: string;
  @Expose()
  orderNumber: number;
  @Expose()
  orderTotal: number;
  @Expose()
  totalItemQuantity: number;
  @Expose()
  @Transform(({ obj }) =>
    plainToInstance(OrderItemDto, obj.items, {
      excludeExtraneousValues: true,
    }),
  )
  items: OrderItemDto[];
  @Expose()
  status: string;
  @Expose()
  createdAt: Date;
}
