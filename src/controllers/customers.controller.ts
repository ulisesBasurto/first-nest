import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getHello(): string {
    return 'Get Customers';
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
