import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBrandDto {
  @IsString({ message: 'Debe ser tipo String' })
  @IsNotEmpty()
  readonly name: string;
  @IsUrl({ protocols: [] }, { message: 'Debe ser tipo String' })
  @IsNotEmpty()
  readonly image: string;
}
//exporta solo las validaciones de la clase create
//y todos las propiedades dejan de ser obligatorias, ?.
export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
