import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
export class CreateProductDto {
  //readOnly, lo hace inmodificable
  @IsString()
  @IsNotEmpty({ message: 'No puede estar vacío' })
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
  @IsNumber({ maxDecimalPlaces: 6 }, { message: 'Debe ser un número' })
  @IsNotEmpty()
  readonly stock: number;
  @IsUrl({ protocols: [] }, { message: 'Debe ser un URL' })
  @IsNotEmpty()
  readonly image: string;
}
export class UpdateProductDto {
  //?, dice que es una propiedad opcional. Puede o puede no ir
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
}
