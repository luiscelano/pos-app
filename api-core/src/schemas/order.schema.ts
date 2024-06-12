import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

export class OrderItem {
  @Prop()
  productId: string;
  @Prop()
  title: string;
  @Prop()
  imageURL: string;
  @Prop()
  quantity: number;
  @Prop()
  price: number;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);

export enum OrderStatus {
  Pending = 'Pending',
  Finished = 'Finished',
  InProgress = 'InProgress',
}

@Schema()
export class Order {
  @Prop()
  orderNumber: number;
  @Prop()
  orderTotal: number;
  @Prop()
  totalItemQuantity: number;
  @Prop({ type: [OrderItem], default: [] })
  items: OrderItem[];
  @Prop()
  status: string;
  @Prop()
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
