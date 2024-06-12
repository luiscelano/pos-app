import { Expose, Transform, plainToInstance } from 'class-transformer';
import { Order, OrderItem } from 'src/schemas/order.schema';

export class OrderItemDto implements OrderItem {
  @Expose()
  productId: string;
  @Expose()
  title: string;
  @Expose()
  imageURL: string;
  @Expose()
  quantity: number;
  @Expose()
  price: number;
}

export class PlaceOrderResponseDto implements Order {
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
