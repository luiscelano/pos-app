import { Expose } from 'class-transformer';
import { OrderItem } from 'src/schemas/order.schema';

export class OrderItemsDto implements OrderItem {
  @Expose({ name: '_id' })
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
