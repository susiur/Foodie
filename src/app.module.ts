import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { TiendasModule } from './tiendas/tiendas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tienda } from './tiendas/entities/tienda.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Eduardo2003@',
      database: 'Foodie',
      entities: [Tienda],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TiendasModule, ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
