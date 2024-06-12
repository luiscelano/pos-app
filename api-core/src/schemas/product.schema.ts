import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
  @Prop()
  category: string;
  @Prop()
  imageURL: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
