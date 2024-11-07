import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tienda } from './entities/tienda.entity';
import { CreateTiendaDto } from './dto/create-tienda.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TiendaService {
  constructor(
    @InjectRepository(Tienda)
    private tiendaRepository: Repository<Tienda>,
  ) {}

  async create(createTiendaDto: CreateTiendaDto): Promise<Tienda> {
    const { ownerPassword, accountPassword } = createTiendaDto;
    if (!ownerPassword || !accountPassword) {
      throw new Error('Owner password and account password are required');
    }

    const saltRounds = 10;
    const hashedOwnerPassword = await bcrypt.hash(ownerPassword, saltRounds);
    const hashedAccountPassword = await bcrypt.hash(
      accountPassword,
      saltRounds,
    );

    // Crear un nuevo objeto tienda y asignar las contraseñas encriptadas
    const tienda = this.tiendaRepository.create({
      ...createTiendaDto,
      ownerPassword: hashedOwnerPassword,
      accountPassword: hashedAccountPassword,
    });

    return this.tiendaRepository.save(tienda);
  }

  async findAll(): Promise<Tienda[]> {
    return await this.tiendaRepository.find();
  }

  async findOne(id: number): Promise<Tienda> {
    const tienda = await this.tiendaRepository.findOne({ where: { id } });
    if (!tienda) {
      throw new NotFoundException(`Tienda con ID ${id} no encontrada`);
    }
    return tienda;
  }

  async update(
    id: number,
    updateTiendaDto: Partial<CreateTiendaDto>,
  ): Promise<Tienda> {
    const tienda = await this.findOne(id);
    Object.assign(tienda, updateTiendaDto);
    return await this.tiendaRepository.save(tienda);
  }

  async remove(id: number): Promise<void> {
    const tienda = await this.findOne(id);
    await this.tiendaRepository.remove(tienda);
  }

  // Método para desactivar tiendas después de 24 horas
  async desactivarTiendasInactivas(): Promise<void> {
    const tiendas = await this.tiendaRepository.find({
      where: { activa: true },
    });
    const ahora = new Date();

    tiendas.forEach(async (tienda) => {
      const diff = ahora.getTime() - tienda.fechaActivacion.getTime();
      const horas = diff / (1000 * 60 * 60);

      if (horas >= 24) {
        tienda.activa = false;
        await this.tiendaRepository.save(tienda);
      }
    });
  }
}
