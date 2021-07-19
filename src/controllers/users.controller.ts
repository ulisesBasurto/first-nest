import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getHello(): string {
    return 'Get Users';
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
