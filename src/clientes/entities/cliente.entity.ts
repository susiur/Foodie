import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Cliente')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  email: string;

  @Column()
  telefono: string;

  @Column()
  password: string;
}
