import { Module } from '@nestjs/common';
import { TiendaService } from './tiendas.service';
import { TiendasController } from './tiendas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tienda } from './entities/tienda.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tienda])],
  controllers: [TiendasController],
  providers: [TiendaService],
})
export class TiendasModule {}
