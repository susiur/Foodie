import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Tienda } from "src/tiendas/entities/tienda.entity";

export class CreateProductoDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty() 
    @IsString()
    precio: number;

    @IsNotEmpty()
    @IsEmail()
    description: string;

    @IsNotEmpty()
    @IsString()
    store: Tienda;
}

