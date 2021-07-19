import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { BrandsController } from './controllers/brands.controller';
import { CustomersController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';
import { OrdersController } from './controllers/orders.controller';
import { ProductsService } from './services/products/products.service';
import { CategoriesService } from './services/categories/categories.service';
import { BrandsService } from './services/brands/brands.service';
import { CustomersService } from './services/customers/customers.service';
import { UsersService } from './services/users/users.service';
import { OrdersService } from './services/orders/orders.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    BrandsController,
    CustomersController,
    UsersController,
    OrdersController,
  ],
  providers: [
    AppService,
    ProductsService,
    CategoriesService,
    BrandsService,
    CustomersService,
    UsersService,
    OrdersService,
  ],
})
export class AppModule {}
