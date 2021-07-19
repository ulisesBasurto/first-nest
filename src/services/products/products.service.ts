import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dto/produtcs.dto';
import { Product } from '../../entities/products.entity';

@Injectable()
export class ProductsService {
  private counter = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      image: null,
      stock: 12,
    },
  ];
  findAll() {
    try {
      const products = this.products;
      if (!products) {
        throw new HttpException('No hay productos', HttpStatus.NOT_FOUND);
      }
      return products;
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  findById(id: number) {
    try {
      const product = this.products.find((item) => item.id === id);
      if (!product) {
        throw new HttpException(
          `No se encontró algun producto con el #${id}`,
          HttpStatus.NOT_FOUND,
        );
      }
      return product;
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  create(PayLoad: CreateProductDto) {
    try {
      this.counter++;
      const newProduct = { id: this.counter, ...PayLoad };
      this.products.push(newProduct);
      return newProduct;
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  update(id: number, PayLoad: UpdateProductDto): any {
    try {
      const findProduct = this.findById(id);
      if (findProduct) {
        for (let i = 0; i < this.products.length; i++) {
          const product = this.products[i];
          if (product.id === id) {
            this.products.splice(i, 1);
            const newProduct = { id, ...PayLoad };
            //Esto realiza un merge con el producto anterior y los nuevos datos
            this.products.push({ ...findProduct, ...newProduct });
            return newProduct;
          }
        }
      } else
        throw new HttpException(
          `No se encontró algun producto con el #${id}`,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  delete(id: number): any {
    try {
      if (this.findById(id)) {
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === id) {
            this.products.splice(i, 1);
            return { message: `Product #${id} deleted` };
          }
        }
      } else
        throw new HttpException(
          `No se encontró algun producto con el #${id}`,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
