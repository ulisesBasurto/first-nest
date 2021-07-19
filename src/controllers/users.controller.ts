import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';
import { CreateUserDto, UpdateUserDto } from 'src/dto/user.dto';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }
  @Post()
  create(@Body() PayLoad: CreateUserDto) {
    return this.usersService.create(PayLoad);
  }
  @Put(':id')
  update(
    @Body() PayLoad: UpdateUserDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.usersService.update(id, PayLoad);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
