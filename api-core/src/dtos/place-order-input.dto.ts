import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';

class PlaceOrderItem {
  @IsNotEmpty()
  productId: string;
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}

export class PlaceOrderInputDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => PlaceOrderItem)
  items: PlaceOrderItem[];
}
