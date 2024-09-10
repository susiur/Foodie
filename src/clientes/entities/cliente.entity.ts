import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity("Cliente")
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nombre: string;
    
    @Column()
    apellido: string;

    
    @Column()
    email: string;

}
