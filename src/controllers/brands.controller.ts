import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getHello(): string {
    return 'Get Brands';
  }
  @Post()
  create(@Body() PayLoad: any) {
    return { message: 'created', body: PayLoad };
  }
  @Put(':id')
  update(@Body() PayLoad: any, @Param('id') id: number) {
    return { message: 'Updated', id, boyd: PayLoad };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return { message: 'Deleted', id };
  }
}
