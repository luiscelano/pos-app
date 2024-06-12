import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

class OrderItem {
  productId: string;
  title: string;
  imageURL: string;
  quantity: number;
  price: number;
}

@Schema()
export class Order {
  orderId: string;
  orderNumber: number;
  orderTotal: number;
  items: OrderItem[];
  status: string;
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
