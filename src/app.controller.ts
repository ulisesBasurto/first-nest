import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('machista')
  getOtherMessage(): string {
    return this.appService.getOtherMessage();
  }
  //Params
  @Get('machista/:name')
  getOtherDinamicMessage(@Param() params: any): string {
    return 'hola prra ' + params.name;
  }
  @Get('machista2/:name')
  getOtherDinamicMessage2(@Param('name') name: string): string {
    return 'hola prrota ' + name;
  }
  //Query params
  @Get('feministas')
  findAll(@Query() queryParams): string {
    const { nombre, fecha } = queryParams;
    return (
      'Solicitaste las busqueda de feministas por nombre: ' +
      nombre +
      ' ,y por fecha : ' +
      fecha
    );
  }
  //Hay que acomodar en orden las rutas:
  //1) Las no dinamicas primer
  //2) las dinamcas debajo
}
