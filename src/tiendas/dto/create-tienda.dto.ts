import { IsString, IsEmail, IsPhoneNumber, IsBoolean } from 'class-validator';
export class CreateTiendaDto {
    @IsString()
    nombre: string;
    @IsEmail()
    email: string;
    @IsPhoneNumber()
    telefono: string;
    @IsString()
    direccion: string;
    @IsString()
    ciudad: string;
    @IsBoolean()
    activa: boolean;
}
