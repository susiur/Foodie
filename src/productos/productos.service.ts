import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const { nombre, precio, description, store } = createProductoDto;

    const producto = this.productoRepository.create({
      nombre,
      precio,
      description,
      store,
    });

    return this.productoRepository.save(producto);
  }

  async findAll(): Promise<Producto[]> {
    return this.productoRepository.find();
  }
  findOne(id: number): Promise<Producto> {
    return this.productoRepository.findOne({
      where: { id },
    });
  }
  async update(
    id: number,
    updateProductoDto: UpdateProductoDto,
  ): Promise<Producto> {
    const producto = await this.productoRepository.preload({
      id: id,
      ...updateProductoDto,
    });
    if (!producto) {
      throw new Error(`Producto con id ${id} no encontrado`);
    }
    return this.productoRepository.save(producto);
  }

  async remove(id: number): Promise<Producto> {
    const producto = await this.findOne(id);
    return this.productoRepository.remove(producto);
  }
}
