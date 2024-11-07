import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { Tienda } from 'src/tiendas/entities/tienda.entity';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
    @IsOptional()
    @IsString()
    nombre: string;
    
    @IsOptional()
    @IsString() 
    precio: number;

    @IsOptional()
    @IsString()
    @IsEmail()
    description: string;

    @IsOptional()
    @IsString()
    store: Tienda;
}
