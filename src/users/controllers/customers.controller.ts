import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}
  @Get()
  findAll() {
    return this.customerService.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.findOne(id);
  }
  @Post()
  create(@Body() PayLoad: CreateCustomerDto) {
    return this.customerService.create(PayLoad);
  }
  @Put(':id')
  update(
    @Body() PayLoad: UpdateCustomerDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.customerService.update(id, PayLoad);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.remove(id);
  }
}
