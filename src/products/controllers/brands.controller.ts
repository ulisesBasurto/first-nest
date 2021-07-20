import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { BrandsService } from '../services/brands.service';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dto';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}
  @Get()
  findAll() {
    return this.brandsService.findAll();
  }
  @Post()
  create(@Body() PayLoad: CreateBrandDto) {
    return this.brandsService.create(PayLoad);
  }
  @Put(':id')
  update(@Body() PayLoad: UpdateBrandDto, @Param('id') id: number) {
    return this.brandsService.update(id, PayLoad);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.brandsService.remove(id);
  }
}
