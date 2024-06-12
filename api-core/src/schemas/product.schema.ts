import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  productId: string;
  title: string;
  description: string;
  price: number;
  category: string;
  imageURL: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
