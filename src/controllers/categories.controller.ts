import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getHello(): string {
    return 'Get Categories';
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
