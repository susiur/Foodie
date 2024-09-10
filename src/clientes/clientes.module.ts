import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Cliente } from './entities/cliente.entity'; // Import the entity
@Module({
  imports: [TypeOrmModule.forFeature([Cliente])], // Use TypeOrmModule.forFeature instead
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}
