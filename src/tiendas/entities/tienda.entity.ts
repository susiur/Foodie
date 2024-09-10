import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('tienda')
export class Tienda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 15 })
  telefono: string;

  @Column({ type: 'varchar', length: 255 })
  direccion: string;

  @Column({ type: 'varchar', length: 255 })
  ciudad: string;

  @Column({ type: 'boolean', default: true })
  activa: boolean;

  @Column({ type: 'varchar', nullable: true })
  logo: string;

  @CreateDateColumn()
  fechaActivacion: Date;

  // Método para verificar si han pasado 24 horas
  esActiva(): boolean {
    const ahora = new Date();
    const diff = ahora.getTime() - this.fechaActivacion.getTime();
    const horas = diff / (1000 * 60 * 60); // Convertir a horas
    return horas < 24;
  }
}

