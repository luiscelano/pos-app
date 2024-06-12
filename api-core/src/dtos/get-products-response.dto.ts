import { Expose } from 'class-transformer';
import { Product } from 'src/schemas/product.schema';

export class GetProductsResponseDto implements Product {
  @Expose({ name: '_id' })
  productId: string;
  @Expose()
  title: string;
  @Expose()
  description: string;
  @Expose()
  price: number;
  @Expose()
  category: string;
  @Expose()
  imageURL: string;
}
