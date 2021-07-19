import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  Res,
  HttpException,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from '../services/products/products.service';
import { MineParseIntPipe } from '../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dto/produtcs.dto';

import { Response } from 'express';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  //Puedo usar el control de httpCodes de Nest ó (ver Post)
  @HttpCode(HttpStatus.ACCEPTED)
  getHello(): any {
    return this.productsService.findAll();
  }
  @Get(':id')
  //Puedo usar el control de httpCodes de Nest ó (ver Post)
  @HttpCode(HttpStatus.ACCEPTED)
  findById(@Param('id', MineParseIntPipe) id: number): any {
    return this.productsService.findById(id);
  }
  @Post()
  //Podemos usar las respuestas de Express :D
  create(@Res() response: Response, @Body() PayLoad: CreateProductDto) {
    response.status(201).json(this.productsService.create(PayLoad));
  }
  @Put(':id')
  update(
    @Body() PayLoad: UpdateProductDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    try {
      return this.productsService.update(id, PayLoad);
    } catch (e) {
      console.log(e);

      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
}
