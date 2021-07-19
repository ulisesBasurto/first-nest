import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Validations with DTOs, la activamos de manera global, para toda la aplicación.
  app.useGlobalPipes(
    new ValidationPipe({
      //WhiteList elimina del PayLoad todas las propiedas ajenas
      whitelist: true,
      //fordid, retorna un mensaje de error a detectar una propiedad no reconocida en el PayLoad
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
