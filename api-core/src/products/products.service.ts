import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import MapperDecorator from 'src/decorators/mapper.decorator';
import { GetProductsResponseDto } from 'src/dtos/get-products-response.dto';
import { Product } from 'src/schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productsModel: Model<Product>,
  ) {}

  @MapperDecorator(GetProductsResponseDto)
  async getProducts(): Promise<any> {
    const result = await this.productsModel.find().exec();
    console.log(result.map((item) => item.toJSON()));
    return result.map((item) => ({ ...item.toJSON(), _id: item.id }));
  }
}
