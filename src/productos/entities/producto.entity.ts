import { Tienda } from 'src/tiendas/entities/tienda.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('Producto')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  precio: number;

  @Column()
  description: string;

  // Relación ManyToOne: un producto pertenece a una tienda
  @ManyToOne(() => Tienda, (tienda) => tienda.productos)
  @JoinColumn({ name: 'store' })
  store: Tienda;
}
